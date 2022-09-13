import Link from 'next/link';
import React from 'react';
import ProjectCard from './ProjectCard';

export const Project = () => {
	return (
		<section className="bg-white py-48">
			<div className="mx-auto max-w-5xl px-6 text-center">
				<h2 className="text-2xl font-semibold text-black">Side Projects</h2>

				<div className="mt-10 flex items-center justify-center">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
									'Mongoose ODM',
									'Docker',
								],
								url: 'https://github.com/devchristam/vue3-login-system',
							}}
						/>
						<ProjectCard
							detail={{
								title: 'Weather widget',
								img: '/image/proj2.png',
								content:
									'a react component to display current weather by openweathermap Api',
								tech: ['React', 'TailwindCSS'],
								url: 'https://github.com/devchristam/tailwindcss-react-weather-widget',
							}}
						/>
						<ProjectCard
							detail={{
								title: 'Personal website',
								img: '/image/proj3.jpg',
								content: 'A personal website to introduce myself',
								tech: ['React', 'TailwindCSS', 'Next.js'],
								url: 'https://github.com/devchristam/nextjs-personal-website',
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
			</div>
		</section>
	);
};