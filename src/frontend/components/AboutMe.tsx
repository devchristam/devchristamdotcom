import React, { useEffect, useRef } from 'react';
import { IconReact } from './icons/IconReact';
import { IconVuejs } from './icons/IconVuejs';
import { IconNode } from './icons/IconNode';
import { IconLaravel } from './icons/IconLaravel';
import { IconGitAlt } from './icons/IconGitAlt';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { IconTailwind } from './icons/IconTailwind';
import { IconNextjs } from './icons/IconNextjs';
import { IconNestjs } from './icons/IconNestjs';
import { IconMysql } from './icons/IconMysql';
import { IconMongo } from './icons/IconMongo';
import { IconGraphql } from './icons/IconGraphql';
import { IconAWS } from './icons/IconAWS';

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
		} else {
			controlAboutMe.start({ opacity: 0, transition: { duration: 1 } });
		}
	}, [inViewAboutMe, controlAboutMe]);

	useEffect(() => {
		if (inViewSkill) {
			controlSkill.start({ opacity: 1, transition: { duration: 1 } });
		} else {
			controlSkill.start({ opacity: 0, transition: { duration: 1 } });
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
						I am Chris Tam from Hong Kong, love to learn new things about
						software development. I work on full-stack web development and enjoy
						exchanging ideas between developers. Besides software development, I
						like custom keyboards, arcade games and trading card games.
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
						<div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-6">
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
								<IconNextjs cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									NextJS
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconTailwind cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Tailwindcss
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconNode cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									NodeJS
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconNestjs cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									NestJS
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconLaravel cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Laravel
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconGraphql cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									GraphQL
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconAWS cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									AWS
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconGitAlt cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									Git
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconMysql cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									MySQL
								</span>
							</span>
							<span className="tooltip hover:text-yellow-200">
								<IconMongo cl="h-24 w-24 fill-current" />
								<span className="tooltip-text -mt-6 -ml-6 rounded bg-green-800 text-white opacity-80">
									MongoDB
								</span>
							</span>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
