import { Grid } from '@chakra-ui/react';
import axios from 'axios';
import { Header } from '../components/Header/Index';
import MainSpace from '../components/MainSpace/Index';
import { Sidebar } from '../components/Sidebar/Index';
import useMatchMedia from '../hooks/useWindowSize';
import { GlobalStyle } from '../Styles/global';
import { VisualElementDragControls } from 'framer-motion/types/gestures/drag/VisualElementDragControls';

const Roles = roleData => {
	const isMobile = useMatchMedia('(min-width:1200px)', true);

	console.log(roleData.roleData);
	return (
		<>
			<Header />
			<Grid templateColumns='repeat(3, 1fr)'>
				{isMobile && <Sidebar />}
				<MainSpace
					roleData={roleData.roleData}
					text='Cargos e Permissões'
					hasTabs={false}
					hasIcon={true}
					isRoles={true}
				/>
			</Grid>
			<GlobalStyle />
		</>
	);
};

export default Roles;

export const getServerSideProps = async () => {
	const response = await axios.get(
		'https://pp-api-desafio.herokuapp.com/role/1'
	);
	// const agentData = response.data.agent;
	const roleData = response.data.role;
	return { props: { roleData } };
};
