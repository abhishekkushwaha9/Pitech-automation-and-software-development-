import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import './Blogs.css';

const Blogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
                const querySnapshot = await getDocs(q);
                const blogsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBlogs(blogsData);
            } catch (error) {
                console.error("Error fetching blogs: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Dynamic categories
    const categories = React.useMemo(() => {
        const uniqueCategories = new Set();
        blogs.forEach(blog => {
            if (blog.category && blog.category.trim() !== '') {
                uniqueCategories.add(blog.category.trim());
            }
        });
        return ["All", ...Array.from(uniqueCategories).sort()];
    }, [blogs]);

    // Filter logic
    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
        const matchesCategory = activeCategory === "All" || (blog.category && blog.category.trim() === activeCategory);
        return matchesSearch && matchesCategory;
    });

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <div className="corp-blogs-page">
            {/* HERO SECTION */}
            <div className="corp-blogs-hero">
                <div className="corp-blogs-hero-content fade-in">
                    <h1>Blogs</h1>
                    <p>Insights, updates, and deep dives into industrial automation.</p>
                </div>
            </div>

            <div className="corp-blogs-layout">
                {/* LEFT CONTENT - BLOGS (70%) */}
                <div className="corp-blogs-main">
                    {loading ? (
                        <div className="corp-loading">Loading articles...</div>
                    ) : filteredBlogs.length === 0 ? (
                        <div className="corp-no-blogs">No articles found matching your criteria.</div>
                    ) : (
                        <>
                            <div className="corp-blogs-grid">
                                {currentBlogs.map((blog, idx) => (
                                    <div
                                        key={blog.id}
                                        className="corp-blog-card fade-in"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="corp-blog-image">
                                            {blog.image ? (
                                                <img src={blog.image} alt={blog.title} />
                                            ) : (
                                                <div className="corp-image-placeholder">PiTech</div>
                                            )}
                                        </div>
                                        <div className="corp-blog-content">
                                            <h3 className="corp-blog-title">{blog.title}</h3>
                                            {blog.content && (
                                                <p className="corp-blog-excerpt">
                                                    {blog.content.length > 80 ? blog.content.slice(0, 90) + '...' : blog.content}
                                                </p>
                                            )}
                                            <div className="corp-blog-meta-footer">
                                                <span className="corp-blog-date">
                                                    {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                                                </span>
                                                <button className="corp-learn-more-btn" onClick={() => navigate(`/blog/${blog.id}`)}>
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PAGINATION */}
                            {totalPages > 1 && (
                                <div className="corp-pagination">
                                    <button
                                        className="corp-page-btn"
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        Prev
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            className={`corp-page-num ${currentPage === i + 1 ? 'active' : ''}`}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        className="corp-page-btn"
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* RIGHT SIDEBAR (30%) */}
                <aside className="corp-blogs-sidebar">
                    <div className="corp-sidebar-widget fade-in">
                        <h3>Search</h3>
                        <input
                            type="text"
                            className="corp-search-input"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>

                    <div className="corp-sidebar-widget fade-in" style={{ animationDelay: '0.1s' }}>
                        <h3>Categories</h3>
                        <ul className="corp-category-list">
                            {categories.map((cat, i) => (
                                <li
                                    key={i}
                                    className={activeCategory === cat ? 'active' : ''}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blogs;