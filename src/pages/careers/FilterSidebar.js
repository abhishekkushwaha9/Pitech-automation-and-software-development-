import React from 'react';
import { AREAS_OF_INTEREST, EXPERIENCE_LEVELS } from './careersData';
import { motion } from 'framer-motion';

export default function FilterSidebar({ filters, handleFilterChange, clearFilters }) {
    return (
        <motion.div 
            className="filter-sidebar premium-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="sidebar-header">
                <h3>Filters</h3>
                <button className="clear-btn" onClick={clearFilters}>Clear</button>
            </div>
            
            <div className="filter-group">
                <label>Area of Interest</label>
                <div className="custom-select-wrapper">
                    <select name="category" value={filters.category} onChange={handleFilterChange} className="modern-select">
                        <option value="">All Areas</option>
                        {AREAS_OF_INTEREST.map((area, idx) => (
                            <option key={idx} value={area}>{area}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="filter-group">
                <label>Experience Level</label>
                <div className="custom-select-wrapper">
                    <select name="experience" value={filters.experience} onChange={handleFilterChange} className="modern-select">
                        <option value="">All Levels</option>
                        {EXPERIENCE_LEVELS.map((exp, idx) => (
                            <option key={idx} value={exp}>{exp}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Note: Location filter removed as per constraints (Only Manesar) */}
        </motion.div>
    );
}
