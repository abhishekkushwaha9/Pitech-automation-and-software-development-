import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './Blogs.css';

const Blogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Blog & Insights | Pitech Automation";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explore insights, technical deep dives, and the latest trends in Industry 4.0, IoT, and automation by Pitech.");
        }

        const fetchPublishedBlogs = async () => {
            try {
                // Fetch only published blogs
                const q = query(collection(db, 'blogs'), where("status", "==", "published"));
                const querySnapshot = await getDocs(q);
                
                // Sort by date manually (if date string exists) or leave as is
                const fetchedBlogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                fetchedBlogs.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
                
                setBlogs(fetchedBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPublishedBlogs();
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <div className="public-blogs-page">
            {/* Minimalist Hero Section */}
            <div className="blogs-hero-section">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="blogs-hero-content"
                >
                    <h1>Pitech Insights</h1>
                    <p>Read about our latest research, engineering insights, and the future of Industry 4.0.</p>
                </motion.div>
            </div>

            {/* Blogs Grid */}
            <div className="blogs-content-wrapper">
                {loading ? (
                    <div className="blogs-loading">
                        <div className="spinner-clean"></div>
                        <p>Loading articles...</p>
                    </div>
                ) : blogs.length === 0 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="blogs-empty">
                        <h2>No articles published yet.</h2>
                        <p>Check back later for new insights and updates.</p>
                    </motion.div>
                ) : (
                    <motion.div 
                        className="modern-blogs-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {blogs.map(blog => (
                            <motion.article 
                                key={blog.id} 
                                className="modern-blog-card"
                                variants={cardVariants}
                                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                                onClick={() => navigate(`/blog/${blog.id}`)}
                            >
                                <div className="blog-card-image">
                                    {blog.image ? (
                                        <img src={blog.image} alt={blog.title} loading="lazy" />
                                    ) : (
                                        <div className="blog-placeholder-img">
                                            <span>{blog.category || 'Article'}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="blog-card-body">
                                    <div className="blog-card-meta">
                                        <span className="blog-category">{blog.category}</span>
                                        <span className="blog-date">
                                            {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                                        </span>
                                    </div>
                                    <h3 className="blog-card-title">{blog.title}</h3>
                                    <p className="blog-card-excerpt">
                                        {blog.content ? blog.content.substring(0, 120) + '...' : 'Read full article...'}
                                    </p>
                                    <span className="blog-read-more">Read More →</span>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Blogs;