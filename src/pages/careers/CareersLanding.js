import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AREAS_OF_INTEREST } from './careersData';
import ThreeBackground from './ThreeBackground';
import useJobs from '../../hooks/useJobs';
import '../Careers.css';

export default function CareersLanding() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const { jobs, loading } = useJobs('open');
    
    // Parallax effect for the hero section
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        document.title = "Careers at Pitech Automation | Shape the Future of Industry 4.0";
        window.scrollTo(0, 0);
    }, []);

    const handleCategoryClick = (category) => {
        navigate(`/careers/jobs?category=${encodeURIComponent(category)}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Auto calculate role counts
    const entryLevelCount = jobs.filter(job => job.levelCategory === 'entry').length;
    const experiencedCount = jobs.filter(job => job.levelCategory === 'experienced').length;

    return (
        <div className="careers-page" style={{ position: 'relative' }}>
            <ThreeBackground />
            
            <div className="careers-container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Premium Hero Section with Parallax */}
                <motion.div 
                    className="careers-hero"
                    style={{ y: heroY, opacity: heroOpacity }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>Build the Future with Pitech Automation</h1>
                    <p>Join us in shaping Industry 4.0 and smart manufacturing solutions.</p>
                </motion.div>

                {/* Main Pathways */}
                <motion.div 
                    className="pathways-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="pathway-card premium-card" 
                        variants={itemVariants}
                        onClick={() => navigate('/careers/jobs?levelCategory=entry')}
                        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <div className="pathway-icon">🚀</div>
                        <h2>Entry Level & Internships</h2>
                        <p>Start your career journey with hands-on experience in cutting-edge industrial technologies.</p>
                        <span className="pathway-link">{entryLevelCount} Roles Available &rarr;</span>
                    </motion.div>

                    <motion.div 
                        className="pathway-card premium-card" 
                        variants={itemVariants}
                        onClick={() => navigate('/careers/jobs?levelCategory=experienced')}
                        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <div className="pathway-icon">⚡</div>
                        <h2>Experienced Professionals</h2>
                        <p>Take the next big step in your career. Lead transformative projects in automation and IoT.</p>
                        <span className="pathway-link">{experiencedCount} Roles Available &rarr;</span>
                    </motion.div>
                </motion.div>

                {/* Areas of Interest */}
                <motion.div 
                    className="areas-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="areas-header">
                        <h2>Explore by Area of Interest</h2>
                    </div>
                    
                    <div className="areas-grid">
                        {AREAS_OF_INTEREST.map((area, index) => (
                            <motion.div 
                                key={index} 
                                className="area-card premium-card"
                                onClick={() => handleCategoryClick(area)}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.04, boxShadow: "0px 15px 35px rgba(0,0,0,0.06)" }}
                            >
                                <h3>{area}</h3>
                                <span>View Roles &rarr;</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                <motion.div 
                    className="view-all-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/careers/jobs" className="btn-premium">View All Openings</Link>
                </motion.div>
            </div>
        </div>
    );
}
