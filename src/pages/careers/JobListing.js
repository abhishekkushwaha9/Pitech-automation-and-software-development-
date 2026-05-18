import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FilterSidebar from './FilterSidebar';
import JobCard from './JobCard';
import useJobs from '../../hooks/useJobs';
import '../Careers.css';

export default function JobListing() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { jobs, loading } = useJobs('open');
    
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || '',
        experience: '',
        type: searchParams.get('type') || '',
        levelCategory: searchParams.get('levelCategory') || ''
    });

    useEffect(() => {
        document.title = "Open Roles | Pitech Automation";
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setFilters(prev => ({
            ...prev,
            category: searchParams.get('category') || prev.category,
            type: searchParams.get('type') || prev.type,
            levelCategory: searchParams.get('levelCategory') || prev.levelCategory
        }));
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
        
        const params = new URLSearchParams(searchParams);
        if (value) params.set(name, value);
        else params.delete(name);
        setSearchParams(params);
    };

    const clearFilters = () => {
        setFilters({ category: '', experience: '', type: '', levelCategory: '' });
        setSearchParams({});
    };

    const filteredJobs = jobs.filter(job => {
        if (filters.category && job.category !== filters.category) return false;
        if (filters.experience && job.experience !== filters.experience) return false;
        if (filters.type && job.type !== filters.type) return false;
        if (filters.levelCategory && job.levelCategory !== filters.levelCategory) return false;
        return true;
    });

    if (loading) return <div className="careers-page"><div className="careers-container">Loading jobs...</div></div>;

    return (
        <div className="careers-page bg-light-alt">
            <div className="careers-container">
                
                <motion.div 
                    className="listing-header-main"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Find Your Next Role</h1>
                    <p>Discover opportunities to shape the future of manufacturing in Manesar.</p>
                </motion.div>

                <div className="listing-layout modern-grid">
                    <FilterSidebar 
                        filters={filters} 
                        handleFilterChange={handleFilterChange} 
                        clearFilters={clearFilters} 
                    />

                    <div className="listing-content">
                        <div className="listing-results-meta">
                            <h2>{filteredJobs.length} {filteredJobs.length === 1 ? 'Role' : 'Roles'} Available</h2>
                        </div>

                        <div className="jobs-list">
                            <AnimatePresence>
                                {filteredJobs.length === 0 ? (
                                    <motion.div 
                                        className="no-jobs-found premium-card"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <h3>No matching roles found.</h3>
                                        <p>Try adjusting your filters or check back later.</p>
                                        <button className="btn-outline" onClick={clearFilters}>Reset Filters</button>
                                    </motion.div>
                                ) : (
                                    filteredJobs.map((job, idx) => (
                                        <JobCard key={job.id} job={job} index={idx} />
                                    ))
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
