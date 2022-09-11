import React from 'react';
import { AboutMe } from './AboutMe';
import { MyFooter } from './Footer';
import { Header } from './Header';
import { Project } from './Project';
import { SelfIntro } from './SelfIntro';
export const FrontPage = () => {
	return (
		<div className="bg-white font-sans">
			<Header />
			<SelfIntro />
			<AboutMe />
			<Project />
			<MyFooter />
		</div>
	);
};
