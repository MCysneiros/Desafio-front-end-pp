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
import { RolesList } from '../RolesList/index';
import Active from '../Active/Index';
import { Container } from './Style';
import { useRouter } from 'next/router';

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
	return (
		<Container>
			<Tabs>
				<TabList color='brand.400'>
					<Tab>Colaboradores</Tab>
					<Tab>Cargos</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<SearchBar searchText='Nome ou CPF' onFormSubmit={onFormSubmit} />
						<div>
							<UserList agents={agents} />
							<Pagination />
						</div>
					</TabPanel>
					<TabPanel>
						<SearchBar searchText='Cargos' onFormSubmit={onFormSubmit} />
						<RolesList />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
}
