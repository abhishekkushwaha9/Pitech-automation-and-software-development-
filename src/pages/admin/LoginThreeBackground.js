import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleGlobe(props) {
    const ref = useRef();
    // Generate 1500 points in a sphere
    const sphere = random.inSphere(new Float32Array(3000), { radius: 1.5 });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#6366f1"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function LoginThreeBackground() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1.2] }}>
                <ambientLight intensity={0.5} />
                <ParticleGlobe />
            </Canvas>
        </div>
    );
}
