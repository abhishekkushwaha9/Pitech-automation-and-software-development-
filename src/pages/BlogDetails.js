import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'blogs', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBlog({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
        // Scroll to top when blog loads
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    // Professional content rendering with proper spacing - NO TRUNCATION
    const renderContent = (content) => {
        if (!content) return <p>No content available for this article.</p>;

        // Split by double newlines for paragraphs
        let paragraphs = content.split(/\n\s*\n/);

        // Filter out empty paragraphs
        paragraphs = paragraphs.filter(p => p.trim().length > 0);

        return paragraphs.map((paragraph, idx) => {
            // Check for markdown-style headings
            const lines = paragraph.split('\n');

            // Heading level 1 (# Heading)
            if (lines.length === 1 && lines[0].startsWith('# ')) {
                return <h2 key={idx}>{lines[0].substring(2)}</h2>;
            }
            // Heading level 2 (## Heading)
            if (lines.length === 1 && lines[0].startsWith('## ')) {
                return <h3 key={idx}>{lines[0].substring(3)}</h3>;
            }

            // Regular paragraph with line breaks preserved - FULL CONTENT NO CUTOFF
            return (
                <p key={idx}>
                    {lines.map((line, lineIdx) => (
                        <React.Fragment key={lineIdx}>
                            {line}
                            {lineIdx < lines.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            );
        });
    };

    if (loading) {
        return (
            <div className="blog-details-page">
                <div className="blog-details-loading">
                    <div className="blog-details-spinner"></div>
                    <p>Loading article...</p>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="blog-details-page">
                <div className="blog-details-error">
                    <h2>📖 Article Not Found</h2>
                    <p>The article you're looking for doesn't exist or has been removed.</p>
                    <button className="blog-details-back-btn" onClick={() => navigate('/blogs')}>
                        ← Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    const formattedDate = blog.date
        ? new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : '';

    return (
        <div className="blog-details-page">
            {/* Hero Banner with Glassmorphism */}
            <div className="blog-details-hero">
                <div className="blog-details-hero-overlay"></div>
                <div className="blog-details-hero-content fade-in-detail">
                    <button className="blog-details-back-link" onClick={() => navigate('/blogs')}>
                        ← Back to Blogs
                    </button>
                    {/* FULL TITLE - NO TRUNCATION */}
                    <h1>{blog.title}</h1>
                    {formattedDate && (
                        <div className="blog-details-meta">
                            <span className="blog-details-date">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                {formattedDate}
                            </span>
                            {blog.category && (
                                <span className="blog-details-category">
                                    📁 {blog.category}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Blog Content with Glass Card */}
            <div className="blog-details-container fade-in-detail" style={{ animationDelay: '0.15s' }}>
                <article className="blog-details-article">
                    {/* Featured Image */}
                    {blog.image && (
                        <div className="blog-details-image-wrapper">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="blog-details-image"
                                loading="eager"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.display = 'none';
                                }}
                            />
                        </div>
                    )}

                    {/* FULL CONTENT - NO TRUNCATION, NO ELLIPSIS */}
                    <div className="blog-details-body">
                        {renderContent(blog.content)}
                    </div>
                </article>

                {/* Bottom Navigation */}
                <div className="blog-details-bottom-nav">
                    <button className="blog-details-back-btn" onClick={() => navigate('/blogs')}>
                        ← Back to All Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;