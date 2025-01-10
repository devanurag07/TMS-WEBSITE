import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function MirrorModel() {
    const gltf = useLoader(GLTFLoader, "/3d/mirror2.glb");
    return <primitive object={gltf.scene} />;
}

export default function MirrorScene() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 100  }}
                shadows
                className="max-w-[200px]"
            >
                <Suspense fallback={null}>
                    <MirrorModel />
                    <Environment preset="apartment" />
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[10, 10, 5]}
                        intensity={1}
                        castShadow
                    />
                </Suspense>
                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    minDistance={2}
                    maxDistance={10}
                />
            </Canvas>
        </div>
    );
}