import { Flex, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Index';
import MainSpace from '../components/MainSpace/Index';
import { Sidebar } from '../components/Sidebar/Index';
import useMatchMedia from '../hooks/useWindowSize';
import { GlobalStyle } from '../Styles/global';
import { api } from '../services/api';

export default function Index() {
	const [agents, setAgents] = useState([]);

	useEffect(() => {
		const getAgentData = async () => {
			const response = await api.get('/agents');

			setAgents(response.data.items);
		};
		getAgentData();
	}, []);

	const isMobile = useMatchMedia('(min-width:1200px)', true);
	return (
		<Flex direction='column'>
			<Header />
			<Grid templateColumns='repeat(3, 1fr)'>
				{isMobile && <Sidebar />}
				<MainSpace
					agents={agents}
					text='Organização'
					hasIcon={false}
					hasTabs={true}
				/>
			</Grid>
			<GlobalStyle />
		</Flex>
	);
}
