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

const items = [
	{
		image: '/assets/images/worklogos/onpointlogo.png',
		title: 'OnPoint',
		text: 'A platform for teenagers to create quality media about the modern world to educate and inform the public.'
	},
	{
		image: '/assets/images/worklogos/sigmoidhackslogo.png',
		title: 'Sigmoid Hacks',
		text: 'Machine Learning doesn’t have to be just another buzz word, make it real with Sigmoid Hacks!'
	},
	{
		image: '/assets/images/worklogos/bytelogo.png',
		title: 'Byte',
		text: 'Reinventing how hackathons are run forever by making a more inclusive and rewarding experience and interface!'
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
						{items.map(item => {
							return (
								<WorkCard
									image={item.image}
									title={item.title}
									text={item.text}
								/>
							);
						})}
					</SimpleGrid>
				</Stack>
				<NextLink href='/work' passHref>
					<Button rightIcon={<Icon as={FiArrowRight} />}>
						All Work
					</Button>
				</NextLink>
			</VStack>
		</Box>
	);
}
