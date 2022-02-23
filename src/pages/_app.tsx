import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../Styles/theme';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const query = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={query}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
