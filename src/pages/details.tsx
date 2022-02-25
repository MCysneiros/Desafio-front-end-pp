import { Flex, Grid } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../components/Header/Index';
import MainSpace from '../components/MainSpace/Index';
import { Sidebar } from '../components/Sidebar/Index';
import useMatchMedia from '../hooks/useWindowSize';
import { api } from '../services/api';
import { GlobalStyle } from '../Styles/global';

export default function Detalhes({ agentData }) {
	console.log(agentData);
	const isMobile = useMatchMedia('(min-width:1200px)', true);
	return (
		<>
			<Header />
			<Grid templateColumns='repeat(3, 1fr)'>
				{isMobile && <Sidebar />}
				<MainSpace
					agentData={agentData.agent}
					text='Detalhes do Colaborador'
					hasTabs={false}
					hasIcon={true}
				/>
			</Grid>
			<GlobalStyle />
		</>
	);
}

export const getServerSideProps = async () => {
	const response = await axios.get(
		'https://pp-api-desafio.herokuapp.com/agent/1'
	);
	// const agentData = response.data.agent;
	const agentData = response.data;
	return { props: { agentData } };
};
