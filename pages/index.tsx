import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Home/Hero';
import Work from '../components/Home/Work/Work';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<Work />
		</div>
	);
};

export default Home;
