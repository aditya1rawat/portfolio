import {
	VStack,
	SimpleGrid,
	Heading,
	Icon,
	Text,
	AspectRatio,
	GridItem,
	HStack,
	Flex,
	Image,
	Box,
	Button,
	IconButton,
	useColorModeValue,
	Badge,
	Tag,
	TagLeftIcon,
	TagLabel,
	Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function ProjectCard(
	{ image, text, title }: string,
	techArray: Array<string>
) {
	const iconColor = useColorModeValue('black', 'white');
	return (
		<Box width={'full'}>
			<motion.div whileHover={{ translateY: -5 }} key={title}>
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
									src={`${image}`}
									w={'12'}
									rounded='full'
									alt={`${title} Logo`}
								/>
							</AspectRatio>
						</Box>

						<NextLink href='/projects' passHref>
							<VStack
								flex={1}
								spacing={2}
								alignItems='flex-start'
								justifyContent='flex-start'
								color={useColorModeValue('black', 'white')}
							>
								<Heading size='md'>{title}</Heading>
								<Text fontSize='sm'>{text}</Text>
							</VStack>
						</NextLink>

						<Box>
							<Tag key={'tech'} variant='solid' size='sm'>
								<TagLabel>{'tech'}</TagLabel>
							</Tag>
						</Box>

						<Flex direction={'row'} gap={'2'} mb='1' width={'full'}>
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
						</Flex>
					</Stack>
				</Box>
			</motion.div>
		</Box>
	);
}
