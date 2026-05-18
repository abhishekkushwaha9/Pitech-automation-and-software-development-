import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function JobCard({ job, index }) {
    return (
        <motion.div 
            className="job-card premium-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0px 12px 24px rgba(0,0,0,0.06)" }}
        >
            <div className="job-card-main">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                    <span className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {job.location}
                    </span>
                    <span className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        {job.experience}
                    </span>
                    <span className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {job.type}
                    </span>
                </div>
                <div className="job-tags">
                    {job?.skills?.slice(0, 4).map((skill, i) => (
                        <span key={i} className="job-tag-pill">{skill}</span>
                    ))}
                    {job?.skills?.length > 4 && <span className="job-tag-pill more">+{job.skills.length - 4}</span>}
                </div>
            </div>
            <div className="job-card-action">
                <Link to={`/careers/job/${job.id}`} className="btn-primary-action">View Role</Link>
            </div>
        </motion.div>
    );
}
