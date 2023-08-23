import type { AppProps } from 'next/app';
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import Layout from '../layouts/Layout';
import { theme } from '../components/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
