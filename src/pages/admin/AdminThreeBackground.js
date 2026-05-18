import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
                color="#e2e8f0"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                transparent
                opacity={0.3}
            />
        </Sphere>
    );
};

export default function AdminThreeBackground() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedShape />
                <mesh position={[-4, 2, -2]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#cbd5e1" transparent opacity={0.2} />
                </mesh>
                <mesh position={[4, -2, -2]}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshStandardMaterial color="#94a3b8" transparent opacity={0.15} />
                </mesh>
            </Canvas>
        </div>
    );
}
