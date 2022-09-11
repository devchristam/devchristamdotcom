import React from 'react';
import { IconLinkedin } from './icons/IconLinkedin';
import { IconGithub } from './icons/IconGithub';
import { IconEnvelope } from './icons/IconEnvelope';
import Link from 'next/link';

export const MyFooter = () => {
	return (
		<footer className="bg-white">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div>
						<div className="mx-2 flex items-center text-gray-800">
							<IconEnvelope cl="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
							<p className="ml-1">devchristam@gmail.com</p>
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
		</footer>
	);
};
