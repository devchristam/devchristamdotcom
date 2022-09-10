import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
export default function Dashboard({ children }: PropsWithChildren) {
	return (
		<>
			<Head>
				<title>Personal web</title>
				<meta name="description" content="nextjs graphql template" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto">{children}</div>
		</>
	);
}
