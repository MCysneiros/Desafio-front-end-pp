import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Checkbox,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	WrapItemProps,
} from '@chakra-ui/react';
import { FormEvent } from 'react';
import Pagination from '../Pagination/Index';
import SearchBar from '../SearchBar';
import UserList from '../UserList/Index';
import TableAvatar from '../UserList/TableAvatar/index';
import { FiMoreVertical } from 'react-icons/fi';

interface Item {
	agent_id: number;
	name: string;
	branch: string;
	department: string;
	image: string;
	role: string;
	status: string;
}
interface TabsListProps {
	onFormSubmit: (event: FormEvent) => void;
	agents: Item[];
}

export default function TabsList({ onFormSubmit, agents }: TabsListProps) {
	const renderingUserlist = agents.map(agent => {
		return (
			<Tbody key={agent.agent_id}>
				<Tr color='brand.300'>
					<Td>
						<Box py='4'>
							<TableAvatar name={agent.name} src={agent.image} />
						</Box>
					</Td>
					<Td>
						<Text>{agent.department}</Text>
					</Td>
					<Td>{agent.role}</Td>
					<Td>{agent.branch}</Td>
					<Td>
						<Text>{agent.status}</Text>
					</Td>
					<Td>
						<FiMoreVertical />
					</Td>
				</Tr>
			</Tbody>
		);
	});

	return (
		<>
			<Tabs>
				<TabList color='brand.400'>
					<Tab>Colaboradores</Tab>
					<Tab>Cargos</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<SearchBar searchText='Nome ou CPF' onFormSubmit={onFormSubmit} />
						<UserList renderingUserlist={renderingUserlist} />
						<Pagination />
					</TabPanel>
					<TabPanel>
						<SearchBar searchText='Cargos' onFormSubmit={onFormSubmit} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
}
