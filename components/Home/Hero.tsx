import {
	Stack,
	VStack,
	Heading,
	Text,
	Box,
	AspectRatio,
	Image,
	Icon,
	Button,
	IconButton,
	SimpleGrid
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

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
					<RoughNotation
						type='highlight'
						color='#f57f17'
						animationDuration={1500}
						multiline
						show
					>
						self-taught full-stack web developer and designer
					</RoughNotation>{' '}
					creating anything from small hackathon projects to complex,
					full-fledged applications. I work as{' '}
					<RoughNotation
						type='box'
						// brackets={['left', 'right']}
						// padding={'5px'}
						color='#bf360c'
						strokeWidth={'2px'}
						animationDuration={1500}
						show
					>
						a freelance web developer
					</RoughNotation>{' '}
					and have worked with various startups and companies. I
					currently attend high school in SoCal driven to pursue a
					future in Computer Science.
				</Text>
				<SimpleGrid columns={3} gap={3}>
					<IconButton
						aria-label='toggle theme'
						icon={<FiGithub />}
						variant='outline'
					/>
					<IconButton
						aria-label='toggle theme'
						icon={<FiMail />}
						variant='outline'
					/>
					<IconButton
						aria-label='toggle theme'
						icon={<FiInstagram />}
						variant='outline'
					/>
				</SimpleGrid>
				{/* <NextLink href='/about' passHref>
					<Button rightIcon={<Icon as={FiArrowRight} />}>
						More About Me
					</Button>
				</NextLink> */}
			</VStack>
			<AspectRatio flexShrink={0} ratio={1} w={56} h={56} as='figure'>
				<Box>
					<Image
						src={'/assets/images/me/rawat.png'}
						rounded='full'
						alt={'Picture of Aditya Rawat'}
					/>
				</Box>
			</AspectRatio>
		</Stack>
	);
}
