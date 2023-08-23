import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../layouts/Layout';
import { theme } from '../components/theme';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<NextNProgress color='linear-gradient(45deg, #D5202C 0%, #9BC53D 53.23%, #006DAA 99.99%, #FFEFEB 100%)' />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
