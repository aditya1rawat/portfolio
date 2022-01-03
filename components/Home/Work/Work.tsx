import {
	Stack,
	VStack,
	Heading,
	Text,
	Box,
	AspectRatio,
	Image,
	Link,
	Icon,
	Button
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import WorkCard from './WorkCard';
import WorkCard2 from './WorkCard2';

export default function Work() {
	return (
		<Box alignItems='center' w='full' as='section' mt='100px'>
			<VStack
				spacing={3}
				alignItems={{ lg: 'flex-start', base: 'center' }}
				w='full'
			>
				<Heading size='xl' as='h2' display={'flex'} flexDir={'row'}>
					Selected Work
				</Heading>

				<Stack direction={'column'} spacing={'14'} mt={'12'}>
					<WorkCard />
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
