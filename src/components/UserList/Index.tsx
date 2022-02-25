import { Container } from './Style';
import {
	Box,
	Checkbox,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

import { useRouter } from 'next/router';
import TableAvatar from './TableAvatar/index';
import Active from '../Active/Index';
import Link from 'next/link';

interface Item {
	agent_id: number;
	name: string;
	branch: string;
	department: string;
	image: string;
	role: string;
	status: string;
}

interface UserListProps {
	agents: Item[];
}

export default function UserList({ agents }: UserListProps) {
	const router = useRouter();

	const renderingUserlist = agents.map(agent => {
		const isOpaque = agent.status === 'active';

		return (
			<Tr color='brand.300' key={agent.agent_id}>
				<Td>
					<Box py='4' opacity={isOpaque ? 'none' : '0.6'}>
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
						<FiMoreVertical />
					</Link>
				</Td>
			</Tr>
		);
	});

	//
	return (
		<Container>
			<h3>Listagem de colaboradores</h3>
			<Box
				className='BorderContainer'
				borderColor='brand.400'
				borderRadius='8px'
				py='2'>
				<Table size='sm' variant='simple'>
					<Thead>
						<Tr color='brand.300'>
							<Th>
								<Box py='2px'>Nome Completo</Box>
							</Th>
							<Th>Departamento</Th>
							<Th>Cargo</Th>
							<Th>Unidade</Th>
							<Th>Status</Th>
						</Tr>
					</Thead>
					<Tbody>{renderingUserlist}</Tbody>
				</Table>
			</Box>
		</Container>
	);
}
