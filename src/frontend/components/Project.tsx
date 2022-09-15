import { motion, useAnimationControls, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

export const Project = () => {
	const controlProject = useAnimationControls();
	const refProject = useRef(null);
	const inViewProject = useInView(refProject);

	useEffect(() => {
		if (inViewProject) {
			controlProject.start({ x: 0, opacity: 1, transition: { duration: 1 } });
		} else {
			controlProject.start({ x: 100, opacity: 0 });
		}
	}, [inViewProject, controlProject]);

	return (
		<section className="bg-white py-48">
			<motion.div
				ref={refProject}
				initial={{ x: 100, opacity: 0 }}
				animate={controlProject}
				className="mx-auto max-w-5xl px-6 text-center"
			>
				<h2 className="text-2xl font-semibold text-black">Projects</h2>

				<div className="mt-10 flex items-center justify-center">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<ProjectCard
							detail={{
								title: 'Personal website',
								img: '/image/proj3.jpg',
								content: 'My personal website',
								tech: ['React', 'TailwindCSS', 'NextJS', 'Framer Motion'],
								url: 'https://github.com/devchristam/nextjs-personal-website',
							}}
						/>
						<ProjectCard
							detail={{
								title: 'Authorization system',
								img: '/image/proj1.png',
								content:
									'a front-end build by vue and vuex with a backend build by express, to implement a authorization system',
								tech: [
									'Vue',
									'Vuex',
									'Bulma',
									'Express',
									'MongoDB',
									'Mongoose',
									'Docker',
								],
								url: 'https://github.com/devchristam/vue3-login-system',
							}}
						/>
						<ProjectCard
							detail={{
								title: 'NextJS GraphQL Template',
								img: '/image/proj4.png',
								content:
									'A Next.js full-stack boilerplate with type-safe end-to-end GraphQL API connection, authorization and authentication',
								tech: [
									'NextJS',
									'TailwindCSS',
									'GraphQL',
									'Prisma',
									'React Query',
									'NextAuth',
								],
								url: 'https://github.com/devchristam/nextjs-graphql-fullstack',
							}}
						/>
					</div>
				</div>

				<div className="mt-12 flex items-center justify-center">
					<Link href="https://github.com/devchristam">
						<a
							className="flex items-center text-black hover:text-gray-700 hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							<span>Visit My Github For More</span>
						</a>
					</Link>
				</div>
			</motion.div>
		</section>
	);
};
