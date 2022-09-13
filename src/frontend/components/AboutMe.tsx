import React, { useEffect, useRef } from 'react';
import { IconReact } from './icons/IconReact';
import { IconVuejs } from './icons/IconVuejs';
import { IconSass } from './icons/IconSass';
import { IconNode } from './icons/IconNode';
import { IconLaravel } from './icons/IconLaravel';
import { IconGitAlt } from './icons/IconGitAlt';
import { IconPython } from './icons/IconPython';
import { IconDatabase } from './icons/IconDatabase';
import { motion, useAnimationControls, useInView } from 'framer-motion';

export const AboutMe = () => {
	const controlAboutMe = useAnimationControls();
	const refAboutMe = useRef(null);
	const inViewAboutMe = useInView(refAboutMe);

	const controlSkill = useAnimationControls();
	const refSkill = useRef(null);
	const inViewSkill = useInView(refSkill);

	useEffect(() => {
		if (inViewAboutMe) {
			controlAboutMe.start({ opacity: 1, transition: { duration: 1 } });
		}
	}, [inViewAboutMe, controlAboutMe]);

	useEffect(() => {
		if (inViewSkill) {
			controlSkill.start({ opacity: 1, transition: { duration: 1 } });
		}
	}, [inViewSkill, controlSkill]);

	return (
		<div className="-skew-y-6 bg-gradient-to-r from-green-600 to-gray-800 py-64">
			<div className="mx-auto max-w-5xl skew-y-6 px-6 text-center">
				<motion.div
					ref={refAboutMe}
					initial={{ opacity: 0 }}
					animate={controlAboutMe}
				>
					<h2 className="text-5xl font-semibold text-white">About Me</h2>
					<p className="mt-4 text-2xl text-white">
						I am Chris Tam from Hong Kong, love to learn new technologies about
						web development and implement it into my work.
					</p>
				</motion.div>
			</div>
			<motion.div
				ref={refSkill}
				initial={{ opacity: 0 }}
				animate={controlSkill}
				className="mx-auto mt-24 max-w-5xl skew-y-6 px-6 text-center"
			>
				<h2 className="text-5xl font-semibold text-white"> Skills </h2>
				<div className="mt-4 text-xl text-white">
					<div className="mt-10 flex items-center justify-center">
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
							<span className="tooltip hover:text-yellow-200">
								<IconReact cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									React
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconVuejs cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Vue
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconSass cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Responsive web design with CSS, Sass, Bootstrap and
									Tailwindcss
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconNode cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									NodeJS and Express
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconLaravel cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Laravel
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconGitAlt cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Git
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconPython cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Python
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconDatabase cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									MySQL and MongoDB
								</span>
							</span>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
