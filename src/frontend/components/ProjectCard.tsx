import React from 'react';
import { IconGithub } from './icons/IconGithub';
import Image from 'next/image';

interface projectCardInterface {
	detail: {
		title: string;
		img: string;
		content: string;
		tech: string[];
		url: string;
	};
}

const ProjectCard = (props: projectCardInterface) => {
	const openlink = () => {
		window.open(props?.detail?.url, '_blank');
	};

	const displaytech = () => {
		return props?.detail?.tech.map((obj) => {
			return (
				<span
					key={obj}
					className="m-1 grow-0 rounded-md bg-green-500 p-1 text-white"
				>
					{obj}
				</span>
			);
		});
	};

	return (
		<div className="w-full max-w-xs">
			<div className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-xl bg-white shadow-lg">
				<Image
					className="object-cover"
					src={props?.detail?.img}
					alt="project image"
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</div>

			<div className="block h-56 overflow-hidden rounded-b-xl bg-gray-200">
				<div className="flex h-full flex-col justify-between py-2 px-3 text-center text-sm">
					<div>
						<p className="text-xl font-bold text-gray-900">
							{props?.detail?.title}
						</p>
						<p className="text-gray-700">{props?.detail?.content}</p>
						<div className="flex flex-wrap">{displaytech()}</div>
					</div>
					<div>
						<button
							className="my-2 rounded-md bg-gray-900 px-2 py-1 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none dark:focus:bg-gray-600"
							onClick={openlink}
						>
							<span className="flex items-center justify-center">
								<IconGithub cl="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
								<p className="ml-1">Code</p>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
