import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import emailjs from 'emailjs-com';
import { AREAS_OF_INTEREST } from './careersData';
import '../Careers.css';

export default function JobDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', areaOfInterest: '', message: '', resumeLink: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loadingJob, setLoadingJob] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const docRef = doc(db, 'jobs', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = { id: docSnap.id, ...docSnap.data() };
                    setJob(data);
                    setFormData(prev => ({ ...prev, areaOfInterest: data.category }));
                    document.title = `${data.title} - Careers | Pitech Automation`;
                } else {
                    navigate('/careers/jobs');
                }
            } catch (error) {
                console.error("Error fetching job details:", error);
                navigate('/careers/jobs');
            }
            setLoadingJob(false);
        };
        fetchJob();
        window.scrollTo(0, 0);
    }, [id, navigate]);

    if (loadingJob) return <div className="careers-page"><div className="careers-container">Loading job details...</div></div>;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Submit clicked - Sending via EmailJS sendForm");
        setLoading(true); 
        setErrorMsg('');

        // Basic Validation: make sure it's a valid URL
        const link = formData.resumeLink.trim();
        if (!link) {
            setErrorMsg("Resume link is required.");
            setLoading(false);
            return;
        }
        try {
            new URL(link);
        } catch (_) {
            setErrorMsg("Please enter a valid URL (including http:// or https://).");
            setLoading(false);
            return;
        }

        // Configuration loaded directly from process.env
        const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE;
        const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE;
        const PUBLIC_KEY = process.env.REACT_APP_EMAIL_KEY;

        // Debug logging: Audit form values before sending
        const formDataObj = new FormData(e.target);
        console.log("----- EmailJS SendForm Pre-flight Payload Audit -----");
        for (let pair of formDataObj.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
        console.log("-----------------------------------------------------");

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            e.target,
            PUBLIC_KEY
        )
        .then((result) => {
            console.log("Email successfully sent:", result.text);
            setSuccess(true);
            alert("Application submitted successfully! Our team will review your profile.");
            setFormData({ name: '', email: '', phone: '', areaOfInterest: job.category, message: '', resumeLink: '' });
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            setErrorMsg(`Failed to send application: ${error.text || error.message || 'Unknown error'}`);
            alert("Failed to send application. Please try again.");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    if (!job) return <div className="careers-page"></div>;

    return (
        <div className="careers-page bg-light-alt">
            <div className="careers-container">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <Link to="/careers/jobs" className="back-link">&larr; Back to Open Roles</Link>
                </motion.div>
                
                <div className="job-detail-layout">
                    
                    <motion.div 
                        className="job-detail-content premium-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="jd-header">
                            <h1>{job.title}</h1>
                            <div className="job-meta">
                                <span className="meta-item">{job.location}</span>
                                <span className="meta-item">{job.experience}</span>
                                <span className="meta-item">{job.type}</span>
                                <span className="meta-item">{job.category}</span>
                            </div>
                        </div>

                        <div className="jd-section">
                            <h3>About the Role</h3>
                            <p>{job.description}</p>
                        </div>

                        <div className="jd-section">
                            <h3>Key Responsibilities</h3>
                            <ul className="custom-list">
                                {(typeof job?.responsibilities === 'string' ? job.responsibilities.split('\n') : job?.responsibilities || []).map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="jd-section">
                            <h3>Requirements</h3>
                            <ul className="custom-list">
                                {(typeof job?.requirements === 'string' ? job.requirements.split('\n') : job?.requirements || []).map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="jd-section">
                            <h3>Required Skills</h3>
                            <div className="job-tags">
                                {job?.skills?.map((skill, index) => (
                                    <span key={index} className="job-tag-pill">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="jd-section about-pitech-premium">
                            <h3>Why Pitech Automation?</h3>
                            <p>We are pioneers in Industry 4.0 and Smart Manufacturing. By joining us, you will work on cutting-edge automation solutions that have a real-world industrial impact. We bridge the gap between operational technology (OT) and information technology (IT) to create intelligent, efficient, and connected factories.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="job-apply-sidebar"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="apply-card premium-card">
                            <h2>Apply Now</h2>
                            
                            {success ? (
                                <motion.div 
                                    className="success-message"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    <div className="success-icon">✓</div>
                                    <h3>Application Submitted!</h3>
                                    <p>Application submitted successfully! Our team will review your profile.</p>
                                </motion.div>
                            ) : (
                                <form className="modern-form" onSubmit={handleSubmit}>
                                    {errorMsg && <div className="error-alert">{errorMsg}</div>}
                                    
                                    {/* Hidden fields for auto-filled details required by EmailJS templates */}
                                    <input type="hidden" name="position" value={job.title} />
                                    <input type="hidden" name="areaOfInterest" value={formData.areaOfInterest} />

                                    <div className="floating-input-group">
                                        <input type="text" name="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder=" " />
                                        <label>Full Name</label>
                                    </div>
                                    
                                    <div className="floating-input-group">
                                        <input type="email" name="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder=" " />
                                        <label>Email Address</label>
                                    </div>
 
                                    <div className="floating-input-group">
                                        <input type="tel" name="phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder=" " />
                                        <label>Phone Number</label>
                                    </div>
 
                                    <div className="select-input-group">
                                        <label>Area of Interest (Auto-filled)</label>
                                        <select 
                                            className="modern-select" 
                                            required 
                                            value={formData.areaOfInterest} 
                                            disabled
                                            style={{ backgroundColor: '#e2e8f0', cursor: 'not-allowed', color: '#475569' }}
                                        >
                                            <option value="" disabled>Select</option>
                                            {AREAS_OF_INTEREST.map((area, idx) => (
                                                <option key={idx} value={area}>{area}</option>
                                            ))}
                                        </select>
                                    </div>
 
                                    <div className="floating-input-group">
                                        <input 
                                            type="url" 
                                            name="resumeLink" 
                                            required 
                                            value={formData.resumeLink} 
                                            onChange={e => setFormData({...formData, resumeLink: e.target.value})} 
                                            placeholder=" " 
                                        />
                                        <label>Resume Link (Google Drive / Dropbox)</label>
                                        <small style={{ display: 'block', marginTop: '6px', fontSize: '11px', color: '#64748b', lineHeight: '1.4', textAlign: 'left' }}>
                                            Upload your resume to Google Drive and paste the shareable link here. Make sure access is set to 'Anyone with the link can view'.
                                        </small>
                                    </div>
 
                                    <div className="floating-input-group">
                                        <textarea name="message" rows="3" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder=" "></textarea>
                                        <label>Cover Letter (Optional)</label>
                                    </div>
 
                                    <button type="submit" className="btn-premium submit-btn" disabled={loading}>
                                        {loading ? <span className="loader-dots">Submitting<span>.</span><span>.</span><span>.</span></span> : 'Submit Application'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
