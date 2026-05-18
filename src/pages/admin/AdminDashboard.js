import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../firebase';
import { AREAS_OF_INTEREST, EXPERIENCE_LEVELS, JOB_TYPES } from '../careers/careersData';
import { motion, AnimatePresence } from 'framer-motion';
import AdminThreeBackground from './AdminThreeBackground';
import './Admin.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('blogs');
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    // Jobs State
    const [jobs, setJobs] = useState([]);
    const [jobData, setJobData] = useState({
        title: '', description: '', responsibilities: '', requirements: '', experience: '', levelCategory: 'entry', 
        category: '', type: '', location: 'Manesar, Haryana', skills: '', status: 'open'
    });
    const [editingJobId, setEditingJobId] = useState(null);

    // Blogs State
    const [blogs, setBlogs] = useState([]);
    const [blogData, setBlogData] = useState({ 
        title: '', category: '', content: '', image: '', date: '', status: 'draft' 
    });
    const [editingBlogId, setEditingBlogId] = useState(null);

    // Sidebar navigation items
    const navItems = [
        { id: 'jobs', label: 'Manage Jobs', icon: '💼' },
        { id: 'blogs', label: 'Manage Blogs', icon: '📝' },
    ];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                navigate('/@PAAM');
            } else {
                try {
                    await Promise.all([fetchJobs(), fetchBlogs()]);
                } catch (error) {
                    console.error("Error loading dashboard data:", error);
                } finally {
                    setLoading(false);
                }
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const fetchJobs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'jobs'));
            setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) { console.error(error); }
    };

    const fetchBlogs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'blogs'));
            setBlogs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) { console.error(error); }
    };



    const handleLogout = async () => {
        await signOut(auth);
        navigate('/@PAAM');
    };

    /* ===== JOBS HANDLERS ===== */
    const handleJobSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...jobData,
                skills: typeof jobData.skills === 'string' 
                            ? jobData.skills.split(',').map(s => s.trim()).filter(s => s) 
                            : jobData.skills,
                updatedAt: serverTimestamp()
            };

            if (editingJobId) {
                await updateDoc(doc(db, 'jobs', editingJobId), payload);
                showToast("Job updated successfully!");
            } else {
                payload.createdAt = serverTimestamp();
                await addDoc(collection(db, 'jobs'), payload);
                showToast("New job published successfully!");
            }
            setJobData({
                title: '', description: '', responsibilities: '', requirements: '', experience: '', levelCategory: 'entry', 
                category: '', type: '', location: 'Manesar, Haryana', skills: '', status: 'open'
            });
            setEditingJobId(null);
            fetchJobs();
        } catch (error) { showToast("Error: " + error.message, 'error'); }
    };

    const handleEditJob = (j) => {
        setJobData({
            title: j.title || '', description: j.description || '', responsibilities: j.responsibilities || '',
            requirements: j.requirements || '', experience: j.experience || '', levelCategory: j.levelCategory || 'entry', 
            category: j.category || '', type: j.type || '', location: j.location || 'Manesar, Haryana', 
            skills: Array.isArray(j.skills) ? j.skills.join(', ') : (j.skills || ''), status: j.status || 'open'
        });
        setEditingJobId(j.id);
        setActiveTab('jobs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteJob = async (id) => {
        if (window.confirm("Delete this job permanently?")) {
            await deleteDoc(doc(db, 'jobs', id));
            fetchJobs();
            showToast("Job deleted successfully!");
        }
    };

    /* ===== BLOGS HANDLERS ===== */
    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...blogData, updatedAt: serverTimestamp() };
            if (!payload.date) {
                payload.date = new Date().toISOString();
            }

            if (editingBlogId) {
                await updateDoc(doc(db, 'blogs', editingBlogId), payload);
                showToast("Blog updated successfully!");
            } else {
                payload.createdAt = serverTimestamp();
                await addDoc(collection(db, 'blogs'), payload);
                showToast("New blog published successfully!");
            }
            setBlogData({ title: '', category: '', content: '', image: '', date: '', status: 'draft' });
            setEditingBlogId(null);
            fetchBlogs();
        } catch (error) { showToast("Error: " + error.message, 'error'); }
    };

    const handleEditBlog = (b) => {
        setBlogData({
            title: b.title || '', category: b.category || '', content: b.content || '', 
            image: b.image || '', date: b.date || '', status: b.status || 'draft'
        });
        setEditingBlogId(b.id);
        setActiveTab('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteBlog = async (id) => {
        if (window.confirm("Delete this blog permanently?")) {
            await deleteDoc(doc(db, 'blogs', id));
            fetchBlogs();
            showToast("Blog deleted successfully!");
        }
    };



    if (loading) return (
        <div className="admin-loading-screen">
            <div className="spinner"></div>
            <p>Loading Dashboard...</p>
        </div>
    );

    return (
        <div className="admin-layout">
            <AdminThreeBackground />
            
            {/* Sidebar */}
            <motion.div 
                className="admin-sidebar glass-panel"
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="sidebar-logo">
                    <h2>Admin<span>Panel</span></h2>
                </div>
                <nav className="sidebar-nav">
                    {navItems.map(item => (
                        <button 
                            key={item.id}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>
            </motion.div>

            {/* Main Content Area */}
            <div className="admin-main">
                <motion.header 
                    className="admin-navbar glass-panel"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="navbar-title">
                        <h3>Dashboard Overview</h3>
                    </div>
                    <div className="navbar-actions">
                        <div className="admin-avatar"><span>A</span></div>
                        <button onClick={handleLogout} className="btn-logout">Logout</button>
                    </div>
                </motion.header>

                <div className="admin-content-wrapper">
                    <AnimatePresence mode="wait">
                        
                        {/* ======================= JOBS TAB ======================= */}
                        {activeTab === 'jobs' && (
                            <motion.div key="jobs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="dashboard-section">
                                <div className="content-grid">
                                    <div className="form-card premium-card glass-panel">
                                        <div className="card-header">
                                            <h3>{editingJobId ? 'Edit Job Posting' : 'Create New Job'}</h3>
                                            <p>{editingJobId ? 'Update the details below.' : 'Fill out the form to publish a new role.'}</p>
                                        </div>
                                        <form onSubmit={handleJobSubmit} className="modern-admin-form">
                                            <div className="form-section">
                                                <h4>Basic Info</h4>
                                                <div className="input-group">
                                                    <label>Role Name</label>
                                                    <input type="text" placeholder="e.g. Senior Frontend Developer" value={jobData.title} onChange={e => setJobData({...jobData, title: e.target.value})} required />
                                                </div>
                                                <div className="form-row">
                                                    <div className="input-group">
                                                        <label>Level</label>
                                                        <select value={jobData.levelCategory} onChange={e => setJobData({...jobData, levelCategory: e.target.value})} required>
                                                            <option value="entry">Entry Level / Internship</option>
                                                            <option value="experienced">Experienced Professional</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group">
                                                        <label>Job Category</label>
                                                        <select value={jobData.category} onChange={e => setJobData({...jobData, category: e.target.value})} required>
                                                            <option value="" disabled>Select Job Category</option>
                                                            {AREAS_OF_INTEREST.map(a => <option key={a} value={a}>{a}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="input-group">
                                                        <label>Experience Required</label>
                                                        <select value={jobData.experience} onChange={e => setJobData({...jobData, experience: e.target.value})} required>
                                                            <option value="" disabled>Select Experience</option>
                                                            {EXPERIENCE_LEVELS.map(e => <option key={e} value={e}>{e}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="input-group">
                                                        <label>Job Type</label>
                                                        <select value={jobData.type} onChange={e => setJobData({...jobData, type: e.target.value})} required>
                                                            <option value="" disabled>Select Job Type</option>
                                                            {JOB_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="input-group">
                                                        <label>Status</label>
                                                        <select value={jobData.status} onChange={e => setJobData({...jobData, status: e.target.value})} required>
                                                            <option value="open">🟢 OPEN (Visible on site)</option>
                                                            <option value="closed">🔴 CLOSED (Hidden)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-section">
                                                <h4>Job Details</h4>
                                                <div className="input-group">
                                                    <label>Required Skills</label>
                                                    <input type="text" placeholder="e.g. React, Node.js, MongoDB" value={jobData.skills} onChange={e => setJobData({...jobData, skills: e.target.value})} required />
                                                </div>
                                                <div className="input-group">
                                                    <label>About the Role</label>
                                                    <textarea placeholder="Write a brief description..." value={jobData.description} onChange={e => setJobData({...jobData, description: e.target.value})} required rows="3" />
                                                </div>
                                                <div className="input-group">
                                                    <label>Key Responsibilities</label>
                                                    <textarea placeholder="Enter each on a new line" value={jobData.responsibilities} onChange={e => setJobData({...jobData, responsibilities: e.target.value})} required rows="4" />
                                                </div>
                                                <div className="input-group">
                                                    <label>Requirements</label>
                                                    <textarea placeholder="Enter each on a new line" value={jobData.requirements} onChange={e => setJobData({...jobData, requirements: e.target.value})} required rows="4" />
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn-gradient">
                                                    {editingJobId ? 'Save Changes' : 'Publish Job'}
                                                </motion.button>
                                                {editingJobId && (
                                                    <button type="button" className="btn-outline-cancel" onClick={() => {
                                                        setEditingJobId(null); 
                                                        setJobData({title:'',description:'',responsibilities:'',requirements:'',experience:'',levelCategory:'entry',category:'',type:'',location:'Manesar, Haryana',skills:'',status:'open'});
                                                    }}>Cancel</button>
                                                )}
                                            </div>
                                        </form>
                                    </div>

                                    <div className="list-card premium-card glass-panel">
                                        <div className="card-header">
                                            <h3>Active Postings ({jobs.length})</h3>
                                            <p>Manage existing job roles.</p>
                                        </div>
                                        <div className="jobs-list-container">
                                            {jobs.length === 0 ? <div className="empty-state">No jobs found.</div> : (
                                                jobs.map(job => (
                                                    <motion.div key={job.id} className="admin-job-item" whileHover={{ y: -2, boxShadow: "0px 8px 16px rgba(0,0,0,0.05)" }}>
                                                        <div className="job-info">
                                                            <h4>{job.title}</h4>
                                                            <div className="job-meta">
                                                                <span className="badge category">{job.category}</span>
                                                                <span className={`badge status ${job.status || 'open'}`}>{(job.status || 'open').toUpperCase()}</span>
                                                            </div>
                                                        </div>
                                                        <div className="job-actions">
                                                            <button onClick={() => handleEditJob(job)} className="action-btn edit">Edit</button>
                                                            <button onClick={() => handleDeleteJob(job.id)} className="action-btn delete">Delete</button>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* ======================= BLOGS TAB ======================= */}
                        {activeTab === 'blogs' && (
                            <motion.div key="blogs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="dashboard-section">
                                <div className="content-grid">
                                    <div className="form-card premium-card glass-panel">
                                        <div className="card-header">
                                            <h3>{editingBlogId ? 'Edit Blog Post' : 'Create New Blog'}</h3>
                                            <p>{editingBlogId ? 'Update the content below.' : 'Write a new blog article.'}</p>
                                        </div>
                                        <form onSubmit={handleBlogSubmit} className="modern-admin-form">
                                            <div className="form-section">
                                                <h4>Blog Info</h4>
                                                <div className="input-group">
                                                    <label>Article Title</label>
                                                    <input type="text" placeholder="Enter an engaging title..." value={blogData.title} onChange={e => setBlogData({...blogData, title: e.target.value})} required />
                                                </div>
                                                <div className="form-row">
                                                    <div className="input-group">
                                                        <label>Category / Topic</label>
                                                        <input type="text" placeholder="e.g. Industry 4.0, IoT" value={blogData.category} onChange={e => setBlogData({...blogData, category: e.target.value})} required />
                                                    </div>
                                                    <div className="input-group">
                                                        <label>Date</label>
                                                        <input type="date" value={blogData.date} onChange={e => setBlogData({...blogData, date: e.target.value})} required />
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <label>Hero Image URL</label>
                                                    <input type="url" placeholder="https://..." value={blogData.image} onChange={e => setBlogData({...blogData, image: e.target.value})} required />
                                                </div>
                                                <div className="input-group">
                                                    <label>Status</label>
                                                    <select value={blogData.status} onChange={e => setBlogData({...blogData, status: e.target.value})} required>
                                                        <option value="draft">🟡 DRAFT (Hidden)</option>
                                                        <option value="published">🟢 PUBLISHED (Visible on site)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-section">
                                                <h4>Content</h4>
                                                <div className="input-group">
                                                    <label>Full Article Body (Markdown or Text)</label>
                                                    <textarea placeholder="Write your blog content here..." value={blogData.content} onChange={e => setBlogData({...blogData, content: e.target.value})} required rows="10" />
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn-gradient">
                                                    {editingBlogId ? 'Save Changes' : 'Publish Blog'}
                                                </motion.button>
                                                {editingBlogId && (
                                                    <button type="button" className="btn-outline-cancel" onClick={() => {
                                                        setEditingBlogId(null); 
                                                        setBlogData({ title: '', category: '', content: '', image: '', date: '', status: 'draft' });
                                                    }}>Cancel</button>
                                                )}
                                            </div>
                                        </form>
                                    </div>

                                    <div className="list-card premium-card glass-panel">
                                        <div className="card-header">
                                            <h3>All Blogs ({blogs.length})</h3>
                                            <p>Manage your articles.</p>
                                        </div>
                                        <div className="jobs-list-container">
                                            {blogs.length === 0 ? <div className="empty-state">No blogs found.</div> : (
                                                blogs.map(blog => (
                                                    <motion.div key={blog.id} className="admin-job-item" whileHover={{ y: -2, boxShadow: "0px 8px 16px rgba(0,0,0,0.05)" }}>
                                                        <div className="job-info">
                                                            <h4 style={{ fontSize: '15px' }}>{blog.title}</h4>
                                                            <p style={{ margin: '4px 0', fontSize: '12px', color: '#64748b' }}>
                                                                {blog.content ? blog.content.substring(0, 50) + '...' : ''}
                                                            </p>
                                                            <div className="job-meta">
                                                                <span className="badge category">{blog.category}</span>
                                                                <span className={`badge status ${blog.status === 'published' ? 'open' : 'closed'}`}>
                                                                    {(blog.status || 'draft').toUpperCase()}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="job-actions" style={{ flexDirection: 'column', gap: '5px' }}>
                                                            <button onClick={() => window.open(`/blog/${blog.id}`, '_blank')} className="action-btn" style={{ background: '#e0e7ff', color: '#4f46e5' }}>Preview</button>
                                                            <div style={{ display: 'flex', gap: '5px' }}>
                                                                <button onClick={() => handleEditBlog(blog)} className="action-btn edit">Edit</button>
                                                                <button onClick={() => handleDeleteBlog(blog.id)} className="action-btn delete">Delete</button>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}


                    </AnimatePresence>
                </div>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div 
                        className={`toast-notification ${toast.type}`}
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                    >
                        {toast.type === 'success' ? '✓ ' : '⚠️ '}
                        {toast.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminDashboard;
