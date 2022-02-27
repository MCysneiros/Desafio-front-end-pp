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
import { ReactChild, useState } from 'react';

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
	userListRender: JSX.Element[];
}

export default function UserList({ agents, userListRender }: UserListProps) {
	const router = useRouter();

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
					<Tbody>{userListRender}</Tbody>
				</Table>
			</Box>
		</Container>
	);
}
