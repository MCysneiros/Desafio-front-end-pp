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
import { FormEvent, useState } from 'react';
import SearchBar from '../SearchBar';
import UserList from '../UserList/Index';
import { RolesList } from '../RolesList/index';
import { Container } from './Style';
import TableAvatar from '../UserList/TableAvatar';
import Active from '../Active/Index';
import { FiMoreVertical } from 'react-icons/fi';
import Link from 'next/link';
import Pagination from '../Pagination/Index';
import { RightPagination } from '../Pagination/RightPagination';
import { UserListModal } from '../UserListModal/Index';

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
	agents: Item[];
}

export default function TabsList({ agents }: TabsListProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastItem - itemsPerPage;
	const currentItems = agents.slice(indexOfFirstPost, indexOfLastItem);

	const userListRender = currentItems.map(agent => {
		const isOpaque = agent.status === 'active';

		return (
			<Tr color='brand.300' key={agent.agent_id}>
				<Td>
					<Box py='2' opacity={isOpaque ? 'none' : '0.6'}>
						<TableAvatar name={agent.name} src={agent.image} />
					</Box>
				</Td>
				<Td opacity={isOpaque ? 'none' : '0.6'}>
					<Text>{agent.department}</Text>
				</Td>
				<Td opacity={isOpaque ? 'none' : '0.6'}>{agent.role}</Td>
				<Td opacity={isOpaque ? 'none' : '0.6'}>{agent.branch}</Td>
				<Td>
					<Text>
						<Active status={agent.status} />
					</Text>
				</Td>
				<Td>
					<Link href={`/details`} passHref>
						<UserListModal />
					</Link>
				</Td>
			</Tr>
		);
	});

	return (
		<Container>
			<Tabs>
				<TabList color='brand.400'>
					<Tab>Colaboradores</Tab>
					<Tab>Cargos</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<SearchBar searchText='Nome ou CPF' />
						<div>
							<UserList agents={agents} userListRender={userListRender} />
							<div className='pagination'>
								<Pagination
									pageNumber={currentItems.length}
									total={agents.length}
								/>
								<RightPagination
									postPerPage={itemsPerPage}
									totalPost={agents.length}
									paginate={paginate}
									pageIndex={currentItems.length}
								/>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<SearchBar searchText='Cargos' />
						<RolesList />
						<div className='rolePagination'>
							<RightPagination
								postPerPage={itemsPerPage}
								totalPost={agents.length}
								paginate={paginate}
								pageIndex={currentItems.length}
							/>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
}
