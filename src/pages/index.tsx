import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Dashboard from '@/frontend/components/layouts/Dashboard';

const Home: NextPageWithLayout = () => {
	return (
		<div className="px-2">
			<h1 className="text-5xl font-extrabold leading-normal text-gray-800">
				Welcome
			</h1>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Dashboard>{page}</Dashboard>;
};

export default Home;
