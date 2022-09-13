import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

type IDashboardProps = {
	title: string;
	description: string;
	canonical: string;
};

export default function Dashboard({
	children,
	title,
	description,
	canonical,
}: PropsWithChildren<IDashboardProps>) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
					key="viewport"
				/>
				<title>Chris Tam</title>
				<meta name="description" content="Chris Tam personal website" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<NextSeo
					title={title}
					description={description}
					canonical={canonical}
					openGraph={{
						title: title,
						description: description,
						url: canonical,
						locale: process.env.NEXT_PUBLIC_LOCALE,
						site_name: process.env.NEXT_PUBLIC_SITENAME,
					}}
				/>
			</Head>
			<div>{children}</div>
		</>
	);
}
