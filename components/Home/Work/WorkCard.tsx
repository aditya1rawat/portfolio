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

export default function WorkCard({ image, text, title }: string) {
	return (
		<motion.div whileHover={{ scale: 1.01 }} key={title}>
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
					background={'black'}
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
						justifyContent='flex-end'
						color={'white'}
					>
						<Heading size='md'>{title}</Heading>
						<Text fontSize='sm'>{text}</Text>
					</VStack>
					<Flex direction={'row'} gap={'2'} mb='1' width={'full'}>
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
	);
}
