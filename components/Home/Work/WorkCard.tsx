import {
	VStack,
	Heading,
	Text,
	AspectRatio,
	GridItem,
	Flex,
	Image,
	Box,
	IconButton,
	useColorModeValue,
	Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

interface WorkCardProps {
	image: string;
	title: string;
	text: string;
	live: string;
	github: string;
}

export default function WorkCard(props: WorkCardProps) {
	const iconColor = useColorModeValue('black', 'white');
	return (
		<motion.div whileHover={{ translateY: -5 }} key={props.title}>
			<GridItem
				// borderWidth={'3px'}
				background={
					'linear-gradient(45deg, #D5202C 0%, #9BC53D 53.23%, #006DAA 99.99%, #FFEFEB 100%)'
				}
				rounded='xl'
				p={1}
				h='full'
			>
				<VStack
					justifyContent='space-between'
					gap={'10px'}
					rounded='xl'
					background={useColorModeValue('white', 'black')}
					p={6}
					h='full'
				>
					<Box justifyContent='flex-start' w='full'>
						<AspectRatio ratio={1} w={24} h={24} as='figure'>
							<Image
								src={`${props.image}`}
								w={'12'}
								rounded='full'
								alt={`${props.title} Logo`}
							/>
						</AspectRatio>
					</Box>

					<VStack
						flex={1}
						spacing={2}
						alignItems='flex-start'
						justifyContent='flex-start'
						color={useColorModeValue('black', 'white')}
					>
						<Heading size='md'>{props.title}</Heading>
						<Text fontSize='sm'>{props.text}</Text>
					</VStack>

					<Flex direction={'row'} gap={'2'} mb='1' width={'full'}>
						<Link
							href={props.live}
							target='_blank'
							rel='noreferrer'
							w={'full'}
						>
							<IconButton
								aria-label='Live Demo'
								variant={'outline'}
								colorScheme={useColorModeValue(
									'black',
									'white'
								)}
								icon={<FiArrowUpRight />}
								w='full'
							/>
						</Link>
						<Link
							href={props.github}
							target='_blank'
							rel='noreferrer'
							w={'full'}
						>
							<IconButton
								aria-label='Live Demo'
								variant='solid'
								borderColor={useColorModeValue(
									'black',
									'white'
								)}
								borderWidth={'1px'}
								icon={<FiGithub color={iconColor} />}
								w='full'
							/>
						</Link>
					</Flex>
				</VStack>
			</GridItem>
		</motion.div>
	);
}
