import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Tree = () => {
    const tree = useGLTF("./tree/scene.gltf");

    return (
            <primitive object={tree.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const TreeCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [11.25, 5.6, 10.5],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1.5}
                />
                {/* <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                /> */}
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={0}
                    target={[0, 3, 0]} // 또는 원하는 좌표
                />


                <Tree />
                <Preload all />
            </Suspense>

        </Canvas>
    );
};

export default TreeCanvas;
