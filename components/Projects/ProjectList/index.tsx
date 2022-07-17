import { Stack, SimpleGrid, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
	const projects = [
		{
			image: '/assets/images/worklogos/onpointlogo.png',
			title: 'OnPoint v1.0',
			text: 'A platform for teenagers to create quality media about the modern world to educate and inform the public. v1.0',
			tech: [
				'React.js',
				'Chakra-UI',
				'Firebase',
				'Framer-Motion',
				'EditorJS'
			],
			wip: false
		},
		{
			image: '/assets/images/worklogos/onpointlogo.png',
			title: 'OnPoint v2.0',
			text: 'A platform for teenagers to create quality media about the modern world to educate and inform the public. v2.0',
			tech: ['Next.js', 'Chakra-UI', 'Firebase', 'Framer-Motion'],
			wip: true
		},
		{
			image: '/assets/images/worklogos/sigmoidhackslogo.png',
			title: 'Sigmoid Hacks 1.0',
			text: 'Machine Learning doesn’t have to be just another buzz word, make it real with Sigmoid Hacks!',
			tech: [
				'Next.js',
				'Emotion',
				'Styled Components',
				'Firebase',
				'Framer-Motion'
			],
			wip: false
		},
		{
			image: '/assets/images/worklogos/bytelogo.png',
			title: 'Byte',
			text: 'Reinventing how hackathons are run forever by making a more inclusive and rewarding experience and interface!',
			tech: [
				'Next.js',
				'balloon-css',
				'Sass',
				'Firebase',
				'CKEditor',
				'Algolia'
			],
			wip: true
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
						key={project.title}
						image={project.image}
						title={project.title}
						text={project.text}
						techArray={project.tech}
						wip={project.wip}
					/>
				);
			})}
		</SimpleGrid>
	);
}
