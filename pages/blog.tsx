import React from 'react';
import {
	Box,
	Heading,
	Link,
	Image,
	Text,
	Divider,
	HStack,
	Tag,
	Wrap,
	WrapItem,
	SpaceProps,
	useColorModeValue,
	Container,
	VStack,
	SimpleGrid,
	Button
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FiArrowRight } from 'react-icons/fi';
import Featured from '../components/Blog/Featured';
import OtherArticle from '../components/Blog/OtherArticle';

interface Tags {
	tags: Array<string>;
	marginTop?: SpaceProps['marginTop'];
}

// const Tags: React.FC<Tags> = props => {
// 	return (
// 		<HStack spacing={2} marginTop={props.marginTop}>
// 			{props.tags.map(tag => {
// 				return (
// 					<Tag
// 						size={'md'}
// 						variant='solid'
// 						colorScheme='orange'
// 						key={tag}
// 					>
// 						{tag}
// 					</Tag>
// 				);
// 			})}
// 		</HStack>
// 	);
// };

interface BlogAuthorProps {
	date: Date;
}

const Blog: NextPage = () => {
	return (
		<Box width={'full'}>
			<Heading as='h1'>Blog</Heading>
			<Featured />
			<Heading as='h2' fontSize={'2xl'} marginTop='12'>
				Other Articles
			</Heading>
			<Divider marginTop='5' />
			<SimpleGrid columns={3} spacing='30px' marginTop='5'>
				<OtherArticle />
				<OtherArticle />
				<OtherArticle />
			</SimpleGrid>
			<Box display={'flex'} justifyContent={'center'} mt={'10'}>
				<Button>
					Read More <FiArrowRight />
				</Button>
			</Box>
		</Box>
	);
};

export default Blog;
