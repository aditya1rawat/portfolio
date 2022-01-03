import {
	Box,
	Text,
	Stack,
	Image,
	AspectRatio,
	Heading,
	Button,
	IconButton,
	Tooltip,
	Grid,
	Link,
	Badge,
	Tag,
	Flex,
	useColorModeValue as mode
} from '@chakra-ui/react';

import {
	FiArrowDown,
	FiArrowRight,
	FiArrowUp,
	FiArrowUpRight,
	FiGithub
} from 'react-icons/fi';

import { useState } from 'react';

export default function WorkCard() {
	const [show, setShow] = useState(false);
	return (
		<Flex
			flexDir={'column'}
			gap={'2rem'}
			maxW={'container.md'}
			w='container.md'
			borderWidth='1px'
			borderRadius='lg'
			borderColor={'white'}
			padding={'5'}
			transition={'0.25s all ease-in-out'}
		>
			<Stack
				display={'flex'}
				direction={'row'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Box display={'flex'} alignItems={'flex-end'} gap={'2rem'}>
					{/* <AspectRatio ratio={1} w={12} h={12} as='figure'>
						<Image
							src={'/assets/images/worklogos/onpointlogo.png'}
							rounded='full'
						/>
					</AspectRatio> */}
					<Heading
						as={'h5'}
						size={'lg'}
						whiteSpace={'nowrap'}
						textOverflow={'ellipsis'}
						textTransform={'uppercase'}
					>
						OnPoint
					</Heading>
					<Tag>WIP</Tag>
					<Text fontSize={'1rem'} textTransform={'uppercase'}>
						Date
					</Text>
				</Box>
				<Box display={'flex'} alignItems={'center'} gap={'1'}>
					<Tooltip label={'Live'}>
						<IconButton
							size={'md'}
							icon={<FiArrowUpRight />}
							variant={'ghost'}
						/>
					</Tooltip>
					<Tooltip label={'Github'}>
						<IconButton
							size={'md'}
							icon={<FiGithub />}
							variant={'ghost'}
						/>
					</Tooltip>
					<Tooltip label={show ? 'Less Info' : 'More Info'}>
						<IconButton
							size={'md'}
							icon={show ? <FiArrowUp /> : <FiArrowDown />}
							onClick={() => {
								setShow(!show);
							}}
						/>
					</Tooltip>
				</Box>
			</Stack>
			<Box display={show ? 'block' : 'none'}>
				<Text>Description of application</Text>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					gap={'2rem'}
					mt={'5'}
				>
					<Grid gridTemplateColumns={'repeat(4, auto)'} gap={'2rem'}>
						<Text
							borderColor={'white'}
							borderWidth={'1px'}
							px='2'
							py='1'
							borderRadius={'md'}
						>
							Next.js
						</Text>
					</Grid>
				</Flex>
			</Box>
		</Flex>
	);
}
