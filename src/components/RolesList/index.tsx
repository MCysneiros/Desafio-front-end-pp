import { Box, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Container } from './Style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Link from 'next/link';

export const RolesList = () => {
	const router = useRouter();
	const [roles, setRoles] = useState([]);
	useEffect(() => {
		const getRolesData = async () => {
			const response = await api.get('/roles');

			console.log(response.data.roles);
			setRoles(response.data.roles);
		};
		getRolesData();
	}, []);

	console.log(roles);

	const renderRoles = roles?.map(role => {
		let i = 1;
		return (
			<Tbody key={role.departament}>
				<Tr color='brand.300'>
					<Td>
						<Box py='2'>
							<Text className='roleText'>{role.name}</Text>
						</Box>
					</Td>
					<Td>
						<Text className='roleText'>{role.departament}</Text>
					</Td>
					<Td>
						<Text className='roleText'>{role.agents_quantity}</Text>
					</Td>
					<Td>
						<Link href='/role'>
							<FiMoreVertical />
						</Link>
					</Td>
				</Tr>
			</Tbody>
		);
	});

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
							<Th>Cargo</Th>
							<Th>Departamento</Th>
							<Th>Colaboradores</Th>
						</Tr>
					</Thead>
					{renderRoles}
				</Table>
			</Box>
		</Container>
	);
};
