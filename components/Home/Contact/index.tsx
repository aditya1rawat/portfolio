import {
	Box,
	Button,
	Heading,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import NextLink from 'next/link';

export default function Contact() {
	return (
		<Box my='24'>
			<Box
				display={'flex'}
				flexDir='column'
				justifyContent='center'
				alignItems={'center'}
				px='24'
				py='24'
				borderWidth={'5px'}
				borderRadius='15px'
				borderColor={useColorModeValue('black', 'white')}
			>
				<Heading as={'h2'}>Need A Website?</Heading>
				<Text my={5} fontSize='lg'>
					I am always ecstatic to work with any startup, company,
					and/or agency
				</Text>
				<NextLink href='/contact' passHref>
					<Button rightIcon={<FiArrowRight />}>Reach Out</Button>
				</NextLink>
			</Box>
		</Box>
	);
}
