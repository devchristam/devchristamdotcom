import Link from 'next/link';
import React from 'react';
import { IconGithub } from './icons/IconGithub';
import { IconLinkedin } from './icons/IconLinkedin';
export const Header = () => {
	return (
		<header className="bg-white shadow">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div>
						<div className="flex items-center">
							<span className="mx-3 bg-gradient-to-br from-green-500 to-green-900 bg-clip-text text-3xl font-bold text-transparent">
								Chris Tam
							</span>
						</div>
					</div>

					<div className="mx-2 flex items-center">
						<Link href="https://www.linkedin.com/in/devchristam/">
							<a
								className="mx-2 flex items-center text-gray-800 hover:text-green-700"
								target="_blank"
								rel="noreferrer"
							>
								<IconLinkedin cl="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
							</a>
						</Link>
						<Link href="https://github.com/devchristam">
							<a
								className="mx-2 flex items-center text-gray-800 hover:text-green-700"
								target="_blank"
								rel="noreferrer"
							>
								<IconGithub cl="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
