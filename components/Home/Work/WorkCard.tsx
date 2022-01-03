import {
	Box,
	Text,
	Stack,
	Image,
	AspectRatio,
	Heading,
	Button,
	IconButton,
	Tooltip
} from '@chakra-ui/react';
import {
	FiArrowDown,
	FiArrowRight,
	FiArrowUpRight,
	FiGithub
} from 'react-icons/fi';

export default function WorkCard() {
	return (
		<Stack
			direction={'column'}
			spacing={'5'}
			alignContent={'center'}
			justifyContent={'center'}
			borderWidth='1px'
			borderRadius='lg'
			borderColor={'white'}
			padding={'5'}
		>
			<AspectRatio flexShrink={0} ratio={1} w={64} h={64} as='figure'>
				<Box>
					<Image
						src={'/assets/images/worklogos/onpointlogo.png'}
						rounded='full'
					/>
				</Box>
			</AspectRatio>
			<Stack direction={'row'}>
				<Box>
					<Heading>OnPoint</Heading>
					<Text maxW={'56'}>
						Great taste of Coca-Cola with a sweet, smooth cherry
						flavor.
					</Text>
				</Box>
				<Stack direction={'column'} alignContent={'flex-start'}>
					<Box>
						<IconButton
							aria-label='Go To Site'
							icon={<FiArrowUpRight />}
							variant={'solid'}
							size='sm'
							rounded={'full'}
						/>
					</Box>
					<Box>
						<IconButton
							aria-label='Go To Github'
							icon={<FiGithub />}
							variant='ghost'
							size='sm'
						/>
					</Box>
				</Stack>
			</Stack>
		</Stack>
	);
}
