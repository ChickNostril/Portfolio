import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Preload } from "@react-three/drei";
import leafTexture from "../../assets/leaf.png";
import styles from "./Stars.module.scss";

const LeafParticles = () => {
	const COUNT = 1000;
	const ref = useRef();
	const texture = useLoader(THREE.TextureLoader, leafTexture);

	// 초기 위치
	const positions = useMemo(() => {
		const arr = new Float32Array(COUNT * 3);
		for (let i = 0; i < COUNT; i++) {
			arr[i * 3 + 0] = (Math.random() - 0.5) * 6; // X
			arr[i * 3 + 1] = Math.random() * 5; // Y
			arr[i * 3 + 2] = (Math.random() - 0.5) * 6; // Z
		}
		return arr;
	}, []);

	// 속도 및 바람 진동 수치
	const velocities = useMemo(() => {
		const arr = new Float32Array(COUNT);
		for (let i = 0; i < COUNT; i++) {
			arr[i] = 0.001 + Math.random() * 0.002;
		}
		return arr;
	}, []);

	const windFreqs = useMemo(() => {
		const arr = new Float32Array(COUNT);
		for (let i = 0; i < COUNT; i++) {
			arr[i] = 0.5 + Math.random() * 1.5; // 바람 흔들림 주기
		}
		return arr;
	}, []);

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();
		const pos = ref.current.geometry.attributes.position.array;

		for (let i = 0; i < COUNT; i++) {
			const i3 = i * 3;
			const y = pos[i3 + 1];

			// Y축으로 천천히 하강
			pos[i3 + 1] -= velocities[i];

			// X, Z 축으로 바람 타듯 흔들림
			pos[i3 + 0] += Math.sin(t * windFreqs[i] + i) * 0.001; // X 축
			pos[i3 + 2] += Math.cos(t * windFreqs[i] + i) * 0.001; // Z 축

			// 화면 아래로 사라지면 다시 위로
			if (pos[i3 + 1] < -1.5) {
				pos[i3 + 1] = 3 + Math.random(); // 위로 초기화
				pos[i3 + 0] = (Math.random() - 0.5) * 6;
				pos[i3 + 2] = (Math.random() - 0.5) * 6;
			}
		}
		ref.current.geometry.attributes.position.needsUpdate = true;
	});

	const material = useMemo(() => {
		return new THREE.PointsMaterial({
			map: texture,
			transparent: true,
			alphaTest: 0.5,
			size: 0.1,
			sizeAttenuation: true,
			depthWrite: false,
		});
	}, [texture]);

	return (
		<points ref={ref}>
			<bufferGeometry>
				<bufferAttribute
				 attach="attributes-position"
				 array={positions}
				 count={COUNT}
				 itemSize={3}
				/>
			</bufferGeometry>
			<primitive object={material} attach="material" />
		</points>
	);
};

const LeafCanvas = () => {
	return (
		<div className={styles.starsBackground}>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<LeafParticles />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default LeafCanvas;
