import {
	Stack,
	VStack,
	Heading,
	Box,
	SimpleGrid,
	Icon,
	Button
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { FiArrowRight } from 'react-icons/fi';
import WorkCard from './WorkCard';

const projects = [
	{
		image: '/assets/images/worklogos/fidelity.png',
		title: 'Fidelity Investments',
		text: 'Incoming Software Engineering Intern for the summer of 2024 at the Durham, NC corporate office.',
		live: 'https://www.fidelity.com/',
		github: 'https://github.com/fidelity'
	},
	{
		image: '/assets/images/worklogos/kamunity.jpg',
		title: 'Kamunity.io',
		text: 'A platform that brings like-minded people together, to learn from one another, and enhance their financial fulfillment',
		live: 'https://www.kamunity.io/',
		github: 'https://github.com/kamunity-io'
	},
	{
		image: '/assets/images/worklogos/sigmoidhackslogo.png',
		title: 'Sigmoid Hacks 1.0',
		text: 'Machine Learning doesn’t have to be just another buzz word, make it real with Sigmoid Hacks!',
		live: 'https://sigmoidhackssite-oku05ryjt-aditya1rawat.vercel.app/',
		github: 'https://github.com/SigmoidHacks/site'
	}
];

export default function Work() {
	return (
		<Box alignItems='center' w='full' as='section' mt='24'>
			<VStack
				spacing={4}
				alignItems={{ lg: 'flex-start', base: 'center' }}
				w='full'
			>
				<Heading size='xl' as='h2' display={'flex'} flexDir={'row'}>
					Projects / Work
				</Heading>

				<Stack direction={'column'} spacing={'14'}>
					<SimpleGrid
						columns={{ base: 1, md: 3, lg: 3 }}
						gap={8}
						w='full'
					>
						{projects.map(project => {
							return (
								<WorkCard
									key={project.title}
									image={project.image}
									title={project.title}
									text={project.text}
									live={project.live}
									github={project.github}
								/>
							);
						})}
					</SimpleGrid>
				</Stack>
				<NextLink href='/projects' passHref>
					<Button rightIcon={<Icon as={FiArrowRight} />}>
						More Projects / Work
					</Button>
				</NextLink>
			</VStack>
		</Box>
	);
}
