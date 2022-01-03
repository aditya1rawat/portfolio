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
	IconButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const items = [
	{
		image: '/assets/images/worklogos/onpointlogo.png',
		title: 'OnPoint',
		text: 'A platform for teenagers to create quality media about the modern world to educate and inform the public.'
	},
	{
		image: '/assets/images/worklogos/sigmoidhackslogo.png',
		title: 'Sigmoid Hacks',
		text: 'Machine Learning doesn’t have to be just another buzz word, make it real with Sigmoid Hacks!'
	},
	{
		image: '/assets/images/worklogos/bytelogo.png',
		title: 'Byte',
		text: 'Reinventing how hackathons are run forever by making a more inclusive and rewarding experience and interface!'
	}
];

const WorkCard = () => {
	return (
		<Box mt={'15px'}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w='full'>
				{items.map(({ image, text, title }) => (
					<motion.div whileHover={{ scale: 1.01 }}>
						<GridItem
							key={title}
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
								background={'black'}
								p={6}
								h='full'
							>
								<Box justifyContent='flex-start' w='full'>
									<AspectRatio
										ratio={1}
										w={24}
										h={24}
										as='figure'
									>
										<Image
											src={`${image}`}
											w={'12'}
											rounded='full'
										/>
									</AspectRatio>
								</Box>

								<VStack
									flex={1}
									spacing={2}
									alignItems='flex-start'
									justifyContent='flex-end'
								>
									<Heading size='md'>{title}</Heading>
									<Text fontSize='sm'>{text}</Text>
								</VStack>
								<Flex
									direction={'row'}
									gap={'2'}
									mb='1'
									width={'full'}
								>
									<IconButton
										aria-label='Live Demo'
										icon={<FiArrowUpRight />}
										w='full'
									/>
									<IconButton
										aria-label='Live Demo'
										icon={<FiGithub />}
										w='full'
									/>
								</Flex>
							</VStack>
						</GridItem>
					</motion.div>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default WorkCard;
