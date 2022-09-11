import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Dashboard from '@/frontend/components/layouts/Dashboard';
import { FrontPage } from '@/frontend/components/FrontPage';

const Home: NextPageWithLayout = () => {
	return <FrontPage />;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Dashboard>{page}</Dashboard>;
};

export default Home;
