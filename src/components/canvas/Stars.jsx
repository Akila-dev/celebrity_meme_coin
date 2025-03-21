import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	Points,
	PointMaterial,
	Preload,
	OrbitControls,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
	const ref = useRef();
	// const [sphere] = useState(() =>
	// 	random.inSphere(new Float32Array(3000), { radius: 1.2 })
	// );
	const [sphere, setSphere] = useState(null);

	useEffect(() => {
		setSphere(() => random.inSphere(new Float32Array(900), { radius: 1.2 }));
		console.log(sphere);
	}, []);

	// useFrame((state, delta) => {
	// 	ref.current.rotation.x -= delta / 10;
	// 	ref.current.rotation.y -= delta / 15;
	// });

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#eed185"
					size={0.007}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="w-full h-screen fixed top-0 left-0 inset-0 z-[-1] bg-primary">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
