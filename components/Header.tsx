import {
	HStack,
	Heading,
	IconButton,
	useColorMode,
	Button,
	Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack
			as='nav'
			justifyContent='space-between'
			alignItems='center'
			py={3}
		>
			<NextLink href='/' passHref>
				<Link>
					<Heading size='md'>AR.</Heading>
				</Link>
			</NextLink>
			<HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
				<NextLink href='/about' passHref>
					<Button size='sm' variant='ghost'>
						About
					</Button>
				</NextLink>
				<NextLink href='/projects' passHref>
					<Button size='sm' variant='ghost'>
						Projects / Work
					</Button>
				</NextLink>
				<NextLink href='/blog' passHref>
					<Button size='sm' variant='ghost'>
						Blog
					</Button>
				</NextLink>
				<NextLink href='/contact' passHref>
					<Button size='sm' variant='ghost'>
						Contact
					</Button>
				</NextLink>
				<IconButton
					aria-label='toggle theme'
					icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
					variant='ghost'
					size='sm'
					onClick={toggleColorMode}
				/>
			</HStack>
		</HStack>
	);
}
