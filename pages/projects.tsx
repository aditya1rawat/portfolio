import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
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
					content='Web Developer. Software Engineer. High Schooler. Among Other Things.'
				/>
				<link rel='icon' href='assets/images/me/nyucenter.jpg' />
			</Head>
			<Heading size='xl' as='h2' display={'flex'} flexDir={'row'}>
				Projects
			</Heading>
			<ProjectList />
		</Box>
	);
};

export default Projects;
