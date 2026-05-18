import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        // Particles
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 400;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Very subtle slate color for light theme
        const material = new THREE.PointsMaterial({
            color: 0x64748b, 
            size: 1.5,
            transparent: true,
            opacity: 0.3
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            // Slow, subtle rotation
            particles.rotation.y += 0.0005;
            particles.rotation.x += 0.0002;
            
            // Add slight parallax effect on mouse move if desired, but keeping it simple for performance
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mount && renderer.domElement) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
}
