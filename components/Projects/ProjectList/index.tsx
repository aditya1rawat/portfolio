import { Stack, SimpleGrid, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
	const projects = [
		{
			image: '/assets/images/worklogos/onpointlogo.png',
			title: 'The Binding of Isaac: Rebirth',
			text: 'A website for the game "The Binding of Isaac: Rebirth"',
			tech: ['React', 'Next.js', 'Chakra-UI']
		}
	];

	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, lg: 2 }}
			gap={8}
			w='full'
			mt='10'
		>
			{projects.map(project => {
				return (
					<ProjectCard
						image={project.image}
						title={project.title}
						text={project.text}
						techArray={project.tech}
					/>
				);
			})}
		</SimpleGrid>
	);
}
