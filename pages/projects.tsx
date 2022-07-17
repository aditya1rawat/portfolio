import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import ProjectList from '../components/Projects/ProjectList';

const Projects: NextPage = () => {
	return (
		<Box w='full'>
			<Heading size='xl' as='h2' display={'flex'} flexDir={'row'}>
				Projects
			</Heading>
			<ProjectList />
		</Box>
	);
};

export default Projects;
