import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/Home/Contact';
import Hero from '../components/Home/Hero';
import Work from '../components/Home/Work';

const Home: NextPage = () => {
	return (
		<Box width={'full'}>
			<Head>
				<title>Aditya Rawat.</title>
				<meta
					name='description'
					content='Web Developer. Software Engineer. High Schooler. Among Other Things.'
				/>
				<link rel='icon' href='assets/images/me/nyucenter.jpg' />
			</Head>
			<Hero />
			<Work />
			<Contact />
		</Box>
	);
};

export default Home;
