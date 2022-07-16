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
	useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function WorkCard({ image, text, title }: string) {
	const iconColor = useColorModeValue('black', 'white');
	return (
		<NextLink href='/work' passHref>
			<motion.div
				whileHover={{ translateY: -5 }}
				key={title}
				style={{ cursor: 'pointer' }}
			>
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
									src={`${image}`}
									w={'12'}
									rounded='full'
									alt={`${title} Logo`}
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
							<Heading size='md'>{title}</Heading>
							<Text fontSize='sm'>{text}</Text>
						</VStack>
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
					</VStack>
				</GridItem>
			</motion.div>
		</NextLink>
	);
}
