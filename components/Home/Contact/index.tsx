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
				borderRadius='15px'
				p={1}
				background={
					'linear-gradient(45deg, #D5202C 0%, #9BC53D 53.23%, #006DAA 99.99%, #FFEFEB 100%)'
				}
			>
				<Box
					display={'flex'}
					flexDir='column'
					justifyContent='center'
					alignItems={'center'}
					// px='24'
					py='24'
					borderRadius='15px'
					background={useColorModeValue('white', 'black')}
				>
					<Heading as={'h2'}>Need A Website?</Heading>
					<Text my={5} fontSize='lg' textAlign={'center'}>
						I am always ecstatic to work with any startup, company,
						and/or agency
					</Text>
					<NextLink href='/contact' passHref>
						<Button rightIcon={<FiArrowRight />}>Reach Out</Button>
					</NextLink>
				</Box>
			</Box>
		</Box>
	);
}
