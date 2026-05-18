import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ReactMarkdown from 'react-markdown';
import './Blogs.css';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'blogs', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    
                    // If accessed via public URL and it's a draft, don't show unless admin.
                    // For simplicity, we just check if it exists here, 
                    // but you could add auth check to allow admins to preview drafts.
                    setBlog({ id: docSnap.id, ...data });

                    // SEO Updates
                    document.title = `${data.title} | Pitech Insights`;
                    const metaDesc = document.querySelector('meta[name="description"]');
                    if (metaDesc && data.content) {
                        metaDesc.setAttribute("content", data.content.substring(0, 150) + "...");
                    }
                } else {
                    navigate('/blogs');
                }
            } catch (error) {
                console.error("Error fetching blog details:", error);
                navigate('/blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
        window.scrollTo(0, 0);
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="blog-details-loading">
                <div className="spinner-clean"></div>
            </div>
        );
    }

    if (!blog) return null;

    return (
        <article className="modern-article-page">
            <motion.div 
                className="article-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="article-meta-top">
                    <span className="article-category">{blog.category}</span>
                    <span className="article-date">
                        {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                    </span>
                </div>
                <h1 className="article-title">{blog.title}</h1>
                <div className="article-author">
                    <div className="author-avatar">P</div>
                    <div className="author-info">
                        <strong>Pitech Engineering Team</strong>
                        <span>5 min read</span>
                    </div>
                </div>
            </motion.div>

            {blog.image && (
                <motion.div 
                    className="article-hero-image"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src={blog.image} alt={blog.title} />
                </motion.div>
            )}

            <motion.div 
                className="article-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* We use ReactMarkdown if they typed markdown, otherwise standard text works fine too */}
                <ReactMarkdown>{blog.content}</ReactMarkdown>
            </motion.div>

            <div className="article-footer">
                <button className="back-to-blogs-btn" onClick={() => navigate('/blogs')}>
                    ← Back to all articles
                </button>
            </div>
        </article>
    );
};

export default BlogDetails;