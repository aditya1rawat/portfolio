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
		text: 'Machine Learning Doesnt Have to be Just Another Buzz Word, Make it Real with Sigmoid Hacks!',
		color: 'red.50'
	},
	{
		image: '/assets/images/worklogos/bytelogo.png',
		title: 'Byte',
		text: 'Reinventing how hackathons are run forever by making a more inclusive and rewarding experience and interface!',
		color: 'red.50'
	}
];

const WorkCard = () => {
	return (
		<Box mt={'15px'}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w='full'>
				{items.map(({ image, text, title }) => (
					<GridItem
						key={title}
						borderWidth={'3px'}
						background={
							'linear-gradient(90deg, #D5202C 0%, #9BC53D 53.23%, #006DAA 99.99%, #FFEFEB 100%)'
						}
						rounded='xl'
					>
						<VStack
							h='full'
							justifyContent='space-between'
							p={6}
							gap={'10px'}
							rounded='xl'
							background={'black'}
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
				))}
			</SimpleGrid>
		</Box>
	);
};

export default WorkCard;
