import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls, useInView } from 'framer-motion';

export const SelfIntro = () => {
	const controlSelfIntro = useAnimationControls();
	const refSelfIntro = useRef(null);
	const inViewSelfIntro = useInView(refSelfIntro);

	useEffect(() => {
		if (inViewSelfIntro) {
			controlSelfIntro.start({
				y: 0,
				opacity: 1,
				transition: {
					duration: 1,
				},
			});
		} else {
			controlSelfIntro.start({ y: 100, opacity: 0 });
		}
	}, [inViewSelfIntro, controlSelfIntro]);

	return (
		<div className="my-20 min-h-[70vh] bg-white">
			<motion.div
				ref={refSelfIntro}
				initial={{ y: 100, opacity: 0 }}
				animate={controlSelfIntro}
				className="mx-auto max-w-2xl px-6 text-center"
			>
				<h2 className="text-5xl font-semibold text-gray-800">
					Hello, my name is <span className="text-green-400">Chris Tam</span>{' '}
				</h2>
				<p className="mt-4 text-4xl font-light text-gray-600">
					I am a full-stack web developer.
				</p>

				{/* class relative is required for next js image */}
				<div className="relative mt-16 flex items-end justify-center">
					<Image
						className="rounded-full"
						src="/image/avatar_small.jpg"
						alt="avatar"
						width={320}
						height={320}
						priority={true}
					/>
				</div>
			</motion.div>
		</div>
	);
};
