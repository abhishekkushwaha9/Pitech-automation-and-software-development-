import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../firebase';
import './Admin.css';

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ title: '', category: '', content: '', image: '', date: '' });
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/@PAAM');
            } else {
                fetchBlogs();
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'blogs'));
            const blogsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBlogs(blogsData);
        } catch (error) {
            console.error("Error fetching blogs: ", error);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/@PAAM');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await updateDoc(doc(db, 'blogs', editingId), formData);
            } else {
                await addDoc(collection(db, 'blogs'), formData);
            }
            setFormData({ title: '', category: '', content: '', image: '', date: '' });
            setEditingId(null);
            fetchBlogs();
        } catch (error) {
            console.error("Error saving blog: ", error);
            alert("Error saving blog.");
        }
    };

    const handleEdit = (blog) => {
        setFormData({ title: blog.title || '', category: blog.category || '', content: blog.content || '', image: blog.image || '', date: blog.date || '' });
        setEditingId(blog.id);
        window.scrollTo(0, 0);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteDoc(doc(db, 'blogs', id));
                fetchBlogs();
            } catch (error) {
                console.error("Error deleting blog: ", error);
                alert("Error deleting blog.");
            }
        }
    };

    if (loading) return <div className="admin-loading">Loading...</div>;

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h2>Admin Dashboard</h2>
                <button onClick={handleLogout} className="admin-btn logout">Logout</button>
            </div>
            
            <div className="admin-content">
                <div className="admin-form-container">
                    <h3>{editingId ? 'Edit Blog' : 'Add New Blog'}</h3>
                    <form onSubmit={handleSubmit} className="admin-form">
                        <input 
                            type="text" 
                            placeholder="Blog Title" 
                            value={formData.title} 
                            onChange={(e) => setFormData({...formData, title: e.target.value})} 
                            required 
                        />
                        <input 
                            type="text" 
                            placeholder="Category (e.g., Robotics, Case Studies)" 
                            value={formData.category} 
                            onChange={(e) => setFormData({...formData, category: e.target.value})} 
                            required 
                        />
                        <input 
                            type="date" 
                            value={formData.date} 
                            onChange={(e) => setFormData({...formData, date: e.target.value})} 
                            required 
                        />
                        <input 
                            type="url" 
                            placeholder="Image URL" 
                            value={formData.image} 
                            onChange={(e) => setFormData({...formData, image: e.target.value})} 
                            required 
                        />
                        <textarea 
                            placeholder="Blog Content" 
                            value={formData.content} 
                            onChange={(e) => setFormData({...formData, content: e.target.value})} 
                            rows="6" 
                            required 
                        ></textarea>
                        <div className="form-actions">
                            <button type="submit" className="admin-btn primary">
                                {editingId ? 'Update Blog' : 'Publish Blog'}
                            </button>
                            {editingId && (
                                <button type="button" className="admin-btn secondary" onClick={() => {
                                    setEditingId(null);
                                    setFormData({ title: '', category: '', content: '', image: '', date: '' });
                                }}>Cancel</button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="admin-list-container">
                    <h3>Published Blogs</h3>
                    {blogs.length === 0 ? (
                        <p>No blogs found.</p>
                    ) : (
                        <div className="admin-blog-list">
                            {blogs.map(blog => (
                                <div key={blog.id} className="admin-blog-card">
                                    <div className="admin-blog-info">
                                        <h4>{blog.title}</h4>
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="admin-blog-actions">
                                        <button onClick={() => handleEdit(blog)} className="admin-btn edit">Edit</button>
                                        <button onClick={() => handleDelete(blog.id)} className="admin-btn delete">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
