import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { motion, AnimatePresence } from 'framer-motion';
import LoginThreeBackground from './LoginThreeBackground';
import './Admin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    // Forgot Password States
    const [showForgotModal, setShowForgotModal] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [forgotMessage, setForgotMessage] = useState('');
    const [forgotError, setForgotError] = useState('');
    const [sendingReset, setSendingReset] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/dashboard');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        if (!forgotEmail) {
            setForgotError("Please enter your email address.");
            return;
        }
        
        setSendingReset(true);
        setForgotError('');
        setForgotMessage('');
        
        try {
            await sendPasswordResetEmail(auth, forgotEmail);
            setForgotMessage("If this email is registered, a reset link has been sent. Check Inbox/Spam.");
            setForgotEmail(''); // Clear the input after success
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/user-not-found') {
                setForgotError("Email not registered");
            } else if (err.code === 'auth/invalid-email') {
                setForgotError("Invalid email");
            } else {
                setForgotError(err.message);
            }
        } finally {
            setSendingReset(false);
        }
    };

    return (
        <div className="login-fullscreen-container">
            {/* Split Left: 3D Visualization */}
            <div className="login-left-pane">
                <LoginThreeBackground />
                <div className="login-left-overlay"></div>
                <motion.div 
                    className="login-left-content-centered"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="brand-logo-container">
                        <div className="logo-glow-effect"></div>
                        <motion.img 
                            src="/images/pitech-logo.jpeg" 
                            alt="Pitech Logo" 
                            className="brand-logo-img"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                    </div>
                    
                    <h2 className="brand-name-full">
                        Pitech Automation & Software Development
                    </h2>
                    
                    <p className="brand-subtitle-modern">
                        Industry 4.0 | Automation | Smart Manufacturing
                    </p>
                    
                    <div className="login-footer-tag-centered">
                        <span>Pitech System Controls v4.2</span>
                    </div>
                </motion.div>
            </div>

            {/* Split Right: Form Pane */}
            <div className="login-right-pane">
                <motion.div 
                    className="login-form-wrapper glass-panel"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="login-form-header">
                        <h2>Welcome Back</h2>
                        <p>Please enter your administrator credentials to login.</p>
                    </div>

                    {error && (
                        <motion.div 
                            className="login-error-badge"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            ⚠️ {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleLogin} className="modern-login-form">
                        <div className="input-group-modern">
                            <label>Admin Email</label>
                            <div className="input-with-icon">
                                <span className="input-icon-symbol">✉</span>
                                <input 
                                    type="email" 
                                    placeholder="admin@pitech.com" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="input-group-modern">
                            <label>Password</label>
                            <div className="input-with-icon">
                                <span className="input-icon-symbol">🔒</span>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="forgot-password-link-wrapper">
                            <span 
                                onClick={() => setShowForgotModal(true)}
                                className="link-forgot-pw"
                            >
                                Forgot Password?
                            </span>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.02 }} 
                            whileTap={{ scale: 0.98 }} 
                            type="submit" 
                            className="btn-gradient-modern" 
                            disabled={loading}
                        >
                            {loading ? (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <div className="spinner-mini"></div>
                                    <span>Verifying...</span>
                                </div>
                            ) : 'Log In'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Forgot Password Modal */}
            <AnimatePresence>
                {showForgotModal && (
                    <motion.div 
                        className="modal-overlay-modern"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="modal-content-modern glass-panel"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <h3>Reset Administrator Password</h3>
                            <p className="modal-subtext">
                                Provide your account email. If registered, we will send you secure password reset instructions.
                            </p>
                            
                            {forgotMessage && <p className="modal-success-text">✓ {forgotMessage}</p>}
                            {forgotError && <p className="modal-error-text">⚠️ {forgotError}</p>}
                            
                            <form onSubmit={handleForgotPassword} style={{ marginTop: '20px' }}>
                                <div className="input-group-modern">
                                    <label>Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="admin@pitech.com" 
                                        value={forgotEmail} 
                                        onChange={(e) => setForgotEmail(e.target.value)} 
                                        required 
                                    />
                                </div>
                                
                                <div className="modal-btn-row">
                                    <button type="submit" className="btn-gradient-modern" style={{ flex: 1 }} disabled={sendingReset}>
                                        {sendingReset ? 'Sending...' : 'Send Link'}
                                    </button>
                                    <button type="button" className="btn-outline-modern" style={{ flex: 1 }} onClick={() => {
                                        setShowForgotModal(false);
                                        setForgotMessage('');
                                        setForgotError('');
                                        setForgotEmail('');
                                    }}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminLogin;
