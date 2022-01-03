import {
	Stack,
	VStack,
	Heading,
	Text,
	Box,
	AspectRatio,
	Image,
	Icon,
	Button
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
	return (
		<Stack
			alignItems='center'
			spacing={12}
			w='full'
			direction={{ base: 'column-reverse', md: 'row' }}
			as='section'
		>
			<VStack spacing={3} alignItems='flex-start' w='full'>
				<Stack
					spacing={3}
					w='full'
					direction={'row'}
					justifyContent={{ base: 'center', md: 'flex-start' }}
					alignItems='center'
				>
					<Heading size='xl' as='h1' display={'flex'} flexDir={'row'}>
						Hi!
						<motion.div
							style={{ marginLeft: '10px' }}
							animate={{ rotate: 20 }}
							transition={{
								yoyo: Infinity,
								from: 0,
								duration: 0.35,
								ease: 'easeInOut'
							}}
						>
							👋🏽
						</motion.div>
					</Heading>

					<Heading size='xl' as='h1'>
						I’m Aditya Rawat.
					</Heading>
				</Stack>
				<Text lineHeight='170%' as='h2'>
					I am a{' '}
					<strong style={{ fontWeight: '800' }}>
						self-taught full-stack web developer
					</strong>{' '}
					and designer creating anything from small hackathon projects
					to complex, full-fledged applications. I work as a{' '}
					<strong style={{ fontWeight: '800' }}>
						freelance web devloper
					</strong>{' '}
					and have worked with various startups and companies. I
					currently attend high school in SoCal driven to pursue a
					future in Computer Science.
				</Text>
				<NextLink href='/about' passHref>
					<Button rightIcon={<Icon as={FiArrowRight} />}>
						More About Me
					</Button>
				</NextLink>
			</VStack>
			<AspectRatio flexShrink={0} ratio={1} w={56} h={56} as='figure'>
				<Box>
					<Image
						src={'/assets/images/rawat.png'}
						rounded='full'
						alt={'Picture of Aditya Rawat'}
					/>
				</Box>
			</AspectRatio>
		</Stack>
	);
}
