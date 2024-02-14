import Head from "next/head";
import {appConstant} from '../lib/constants'

export default function Meta() {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={appConstant.appIcon}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={appConstant.appIcon}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={appConstant.appIcon}
			/>
			<link
				rel="mask-icon"
				href={appConstant.appIcon}
				color="#000000"
			/>
			<link
				rel="shortcut icon"
				href={appConstant.appIcon}
			/>
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<meta name="theme-color" content="#000" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			<meta
				name="description"
				content={`A statically generated blog example using Next.js`}
			/>
			<meta
				property="og:image"
				content=
					{appConstant.appIcon}
			/>
		</Head>
	);
}
