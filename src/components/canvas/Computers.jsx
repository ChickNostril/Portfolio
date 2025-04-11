import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";

const Computers = ({ isMobile }) => {
	// const computer = useGLTF("./desktop_pc/scene.gltf");
	const computer = useGLTF("./mac/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={1} groundColor="black" />
			{/* <spotLight
				position={[0, 0, 0]}
				angle={0}
				penumbra={1}
				intensity={1}
				castShadow
			/> */}
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 3.5 : 5}
				position={isMobile ? [0, -2, 0] : [0, -3.25, 0]}
				rotation={[0, 5, 0]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const isMobile = useMediaQuery("(max-width : 600px)");

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
