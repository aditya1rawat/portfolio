import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import ProjectList from '../components/Projects/ProjectList';
import Head from 'next/head';

const Projects: NextPage = () => {
	return (
		<Box w='full'>
			<Head>
				<title>Aditya Rawat.</title>
				<meta
					name='description'
					content='full-stack developer, software engineer, and researcher.'
				/>
				<link rel='icon' href='assets/images/me/home-headshot.jpg' />
			</Head>
			<Heading size='xl' as='h2' display={'flex'} flexDir={'row'}>
				Projects / Work
			</Heading>
			<ProjectList />
		</Box>
	);
};

export default Projects;
