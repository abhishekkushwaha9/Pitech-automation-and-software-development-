import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import './Careers.css';

const JOB_OPENINGS = [
    {
        id: 1,
        title: "Senior Full Stack Developer (MEAN)",
        location: "Manesar, Haryana",
        type: "Full-Time",
        experience: "3-5 Years",
        skills: ["MongoDB", "Express", "Angular", "Node.js"]
    },
    {
        id: 2,
        title: "IoT Embedded Engineer",
        location: "Manesar, Haryana",
        type: "Full-Time",
        experience: "2-4 Years",
        skills: ["C/C++", "Microcontrollers", "IoT Protocols", "PCB Design"]
    },
    {
        id: 3,
        title: "Technical Sales Executive",
        location: "Gurgaon / Manesar",
        type: "Full-Time",
        experience: "1-3 Years",
        skills: ["B2B Sales", "Industrial Automation", "CRM", "Communication"]
    },
    {
        id: 4,
        title: "Service & Support Trainee",
        location: "Manesar, Haryana",
        type: "Trainee / Fresher",
        experience: "0-1 Years",
        skills: ["Troubleshooting", "Basic Electronics", "Customer Support"]
    }
];

const AREAS_OF_INTEREST = [
    "Industrial Automation",
    "Industry 4.0 Solutions",
    "IoT Development",
    "Software Development",
    "PLC/SCADA Systems",
    "AI & Smart Manufacturing"
];

// Subtle Network Particle Background Component
const NetworkBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // Create Particles
        const particleCount = 150;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 400;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            color: 0x94a3b8, // Slate color for light theme
            size: 2,
            transparent: true,
            opacity: 0.6
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Lines connecting particles
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xcbd5e1,
            transparent: true,
            opacity: 0.2
        });

        const animate = () => {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.001;
            particles.rotation.x += 0.0005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount && renderer.domElement) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            lineMaterial.dispose();
        };
    }, []);

    return <div ref={mountRef} className="careers-bg" />;
};

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        message: ''
    });
    const [resume, setResume] = useState(null);
    
    // UI State
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // SEO logic
        document.title = "Careers at Pitech Automation | Jobs in Manesar";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = "Explore exciting career opportunities at Pitech Automation. We are hiring for IoT, Software Development, and Industry 4.0 roles in Manesar, Haryana.";
    }, []);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setFormData(prev => ({ ...prev, areaOfInterest: '' })); // Reset area on new click
        setResume(null);
        setSuccess(false);
        setErrorMsg('');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type (PDF, DOC, DOCX)
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) {
                setErrorMsg("Please upload a valid PDF or DOC file.");
                setResume(null);
                e.target.value = null; // reset input
                return;
            }
            // Max size 5MB
            if (file.size > 5 * 1024 * 1024) {
                setErrorMsg("File size must be under 5MB.");
                setResume(null);
                e.target.value = null;
                return;
            }
            setErrorMsg('');
            setResume(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!resume) {
            setErrorMsg("Please attach your resume.");
            return;
        }

        setLoading(true);
        setErrorMsg('');

        try {
            // 1. Upload Resume to Firebase Storage
            const fileRef = ref(storage, `resumes/${Date.now()}_${resume.name}`);
            const snapshot = await uploadBytes(fileRef, resume);
            const downloadURL = await getDownloadURL(snapshot.ref);

            // 2. Save Application to Firestore
            await addDoc(collection(db, 'applications'), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                position: selectedJob ? selectedJob.title : "General Application",
                areaOfInterest: formData.areaOfInterest,
                message: formData.message,
                resumeUrl: downloadURL,
                timestamp: serverTimestamp()
            });

            // 3. Success UI
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', areaOfInterest: '', message: '' });
            setResume(null);
            
        } catch (error) {
            console.error("Error submitting application:", error);
            setErrorMsg("Failed to submit application. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="careers-page">
            <NetworkBackground />
            
            <div className="careers-container">
                <div className="careers-header">
                    <h1>Current Openings</h1>
                    <p>Join us in driving the future of Industry 4.0 and Smart Manufacturing. Discover your next career move at Pitech Automation.</p>
                </div>

                <div className="careers-grid">
                    {JOB_OPENINGS.map(job => (
                        <div key={job.id} className="job-card">
                            <h3 className="job-title">{job.title}</h3>
                            <div className="job-info">
                                <span>📍 {job.location}</span>
                                <span>⏱️ {job.type}</span>
                                <span>💼 {job.experience}</span>
                            </div>
                            <div className="job-tags">
                                {job.skills.map((skill, index) => (
                                    <span key={index} className="job-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="job-actions">
                                <button className="btn-apply" onClick={() => handleApplyClick(job)}>Apply Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Application Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>&times;</button>
                        
                        {success ? (
                            <div className="success-message">
                                <h3>🎉 Application Submitted!</h3>
                                <p>Thank you for applying to Pitech Automation. Our HR team will review your application and get back to you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="modal-title">Apply for {selectedJob?.title}</h2>
                                {errorMsg && <div style={{ color: '#ef4444', marginBottom: '15px', fontWeight: '500' }}>{errorMsg}</div>}
                                
                                <form className="apply-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input 
                                            type="text" 
                                            required 
                                            value={formData.name} 
                                            onChange={e => setFormData({...formData, name: e.target.value})} 
                                        />
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div className="form-group" style={{ flex: 1 }}>
                                            <label>Email Address *</label>
                                            <input 
                                                type="email" 
                                                required 
                                                value={formData.email} 
                                                onChange={e => setFormData({...formData, email: e.target.value})} 
                                            />
                                        </div>
                                        <div className="form-group" style={{ flex: 1 }}>
                                            <label>Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                required 
                                                value={formData.phone} 
                                                onChange={e => setFormData({...formData, phone: e.target.value})} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Area of Interest *</label>
                                        <select 
                                            required 
                                            value={formData.areaOfInterest} 
                                            onChange={e => setFormData({...formData, areaOfInterest: e.target.value})}
                                        >
                                            <option value="" disabled>Select your primary interest</option>
                                            {AREAS_OF_INTEREST.map((area, idx) => (
                                                <option key={idx} value={area}>{area}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Upload Resume (PDF/DOC) *</label>
                                        <input 
                                            type="file" 
                                            accept=".pdf,.doc,.docx" 
                                            onChange={handleFileChange} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Message / Cover Letter (Optional)</label>
                                        <textarea 
                                            rows="4" 
                                            value={formData.message} 
                                            onChange={e => setFormData({...formData, message: e.target.value})}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? 'Submitting Application...' : 'Submit Application'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
