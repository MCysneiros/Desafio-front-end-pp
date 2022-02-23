import { Flex, Grid } from '@chakra-ui/react';
import { Header } from '../components/Header/Index';
import MainSpace from '../components/MainSpace/Index';
import { Sidebar } from '../components/Sidebar/Index';
import useMatchMedia from '../hooks/useWindowSize';
import { GlobalStyle } from '../Styles/global';

export default function Detalhes() {
	const isMobile = useMatchMedia('(min-width:1200px)', true);
	return (
		<>
			<Header />
			<Grid templateColumns='repeat(3, 1fr)'>
				{isMobile && <Sidebar />}
				<MainSpace
					text='Detalhes do Colaborador'
					hasTabs={false}
					hasIcon={true}
				/>
			</Grid>
			<GlobalStyle />
		</>
	);
}
