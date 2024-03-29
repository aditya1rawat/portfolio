import {
	VStack,
	Heading,
	Text,
	AspectRatio,
	Flex,
	Image,
	Box,
	IconButton,
	useColorModeValue,
	Tag,
	TagLabel,
	Stack,
	Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
	image: string;
	title: string;
	text: string;
	techArray: Array<string>;
	wip: boolean;
	internship: boolean;
	commissioned: boolean;
	live: string;
	github: string;
}

export default function ProjectCard(props: ProjectCardProps) {
	const iconColor = useColorModeValue('black', 'white');
	return (
		<Box width={'full'}>
			<motion.div whileHover={{ translateY: -5 }} key={props.title}>
				<Box
					background={
						'linear-gradient(45deg, #D5202C 0%, #9BC53D 53.23%, #006DAA 99.99%, #FFEFEB 100%)'
					}
					rounded='xl'
					p={1}
					h='full'
				>
					<Stack
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
							<Stack direction={'row'}>
								<Heading size='md'>{props.title}</Heading>
								{props.wip ? (
									<Tag size='md'>
										<TagLabel>WIP</TagLabel>
									</Tag>
								) : null}
								{props.internship ? (
									<Tag size='md'>
										<TagLabel>Internship</TagLabel>
									</Tag>
								) : null}
								{props.commissioned ? (
									<Tag size='md'>
										<TagLabel>Commissioned</TagLabel>
									</Tag>
								) : null}
							</Stack>
							<Text fontSize='sm'>{props.text}</Text>
						</VStack>

						<Box flexDirection={'row'}>
							{Object.values(props.techArray).map(tech => {
								return (
									<Tag
										key={tech}
										m='1'
										variant='solid'
										size='md'
										bg='black'
										color='white'
										_dark={{ bg: 'white', color: 'black' }}
									>
										<TagLabel>{tech}</TagLabel>
									</Tag>
								);
							})}
						</Box>

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
					</Stack>
				</Box>
			</motion.div>
		</Box>
	);
}
