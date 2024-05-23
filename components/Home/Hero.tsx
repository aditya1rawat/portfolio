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
	SimpleGrid,
	Tooltip,
	Badge,
	Tag,
	TagRightIcon,
	useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import {
	FiArrowUpRight,
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiMail
} from 'react-icons/fi';

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
			<VStack
				spacing={3}
				alignItems={{
					base: 'stretch',
					xl: 'flex-start',
					lg: 'flex-start'
				}}
				w='full'
				className='poopy-pants'
			>
				<Stack
					spacing={3}
					w='full'
					direction={['column', 'row', 'row']}
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
				<RoughNotationGroup show>
					<Text
						lineHeight='170%'
						as='h2'
						textAlign={['center', 'unset', 'unset']}
					>
						I am a{' '}
						<RoughNotation
							type='box'
							// brackets={['left', 'right']}
							// padding={'5px'}
							color='#bf360c'
							strokeWidth={2}
							animationDuration={1500}
							multiline
						>
							full-stack developer, software engineer, and
							researcher
						</RoughNotation>{' '}
						creating anything from small hackathon projects to
						complex, full-fledged applications. This summer, I will
						be working as a{' '}
						<RoughNotation
							type='highlight'
							color='#f57f17'
							animationDuration={1500}
							multiline
						>
							software engineering intern
						</RoughNotation>{' '}
						at
						<Tag
							as='a'
							href='https://www.linkedin.com/posts/aditya1rawat_fidelityintern-softwareengineer-intern2024-activity-7160735522368229376-OVHc?utm_source=share'
							target={'_blank'}
							ml={'0'}
							mt={'0.5'}
							py={'0.5'}
							bg={useColorModeValue('white', 'black')}
							transition={'0.3s ease-in-out'}
							color={useColorModeValue('black', 'white')}
							_hover={{
								transition: '0.3s ease-in-out',
								backgroundColor: '#4D8536',
								color: 'white'
							}}
						>
							Fidelity Investments
							<TagRightIcon as={FiArrowUpRight} ml={'1'} />
						</Tag>
						. I am currently an undergraduate student at the
						<Tag
							as='a'
							href='https://www.wisc.edu/'
							target={'_blank'}
							ml={'0'}
							mt={'0.5'}
							py={'0.5'}
							bg={useColorModeValue('white', 'black')}
							color={useColorModeValue('black', 'white')}
							transition={'0.3s ease-in-out'}
							_hover={{
								transition: '0.3s ease-in-out',
								backgroundColor: '#C5050C',
								color: 'white'
							}}
						>
							University of Wisconsin, Madison
							<TagRightIcon as={FiArrowUpRight} ml={'1'} />
						</Tag>{' '}
						actively pursuing a future in computer and data science.
					</Text>
				</RoughNotationGroup>

				<Stack direction={'row'} justifyContent={'center'}>
					<a
						href='/assets/Aditya Rawat - Resume.pdf'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							aria-label='Resume'
							rightIcon={<FiArrowUpRight />}
							variant='outline'
						>
							Resume
						</Button>
					</a>
					<a
						href='https://github.com/aditya1rawat/'
						target='_blank'
						rel='noreferrer'
					>
						<IconButton
							aria-label='Github'
							icon={<FiGithub />}
							variant='outline'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/aditya1rawat/'
						target='_blank'
						rel='noreferrer'
					>
						<IconButton
							aria-label='LinkedIn'
							icon={<FiLinkedin />}
							variant='outline'
						/>
					</a>
					<a
						href='mailto:aditya1rawat@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<IconButton
							aria-label='Email'
							icon={<FiMail />}
							variant='outline'
						/>
					</a>
					<a
						href='https://www.instagram.com/aditya_rawhaaat/'
						target='_blank'
						rel='noreferrer'
					>
						<IconButton
							aria-label='Instagram'
							icon={<FiInstagram />}
							variant='outline'
						/>
					</a>
				</Stack>
			</VStack>
			<AspectRatio flexShrink={0} ratio={1} w={56} h={56} as='figure'>
				<Box>
					<Image
						src={'/assets/images/me/home-headshot.jpg'}
						rounded='full'
						alt={'Picture of Aditya Rawat'}
					/>
				</Box>
			</AspectRatio>
		</Stack>
	);
}
