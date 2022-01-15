import { PropsWithChildren } from 'react';
import { VStack, Container, Box } from '@chakra-ui/react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<Container
			display='flex'
			maxW='container.md'
			minH={{ base: 'auto', md: '100vh' }}
			px={{ base: 4, lg: 0 }}
			centerContent
		>
			<VStack flex={1} spacing={16} alignItems='stretch' w='full'>
				<Header />
				<VStack spacing={16} flex={1} w='full' as='main'>
					{children}
				</VStack>
				<Footer />
			</VStack>
		</Container>
	);
};

export default Layout;
