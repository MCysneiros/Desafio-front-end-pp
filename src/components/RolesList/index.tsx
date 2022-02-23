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
	WrapItemProps,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

import { useRouter } from 'next/router';
import { Container } from './Style';

interface UserListProps {
	renderingUserlist: JSX.Element[];
}

//

export const RolesList = () => {
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
				</Table>
			</Box>
		</Container>
	);
};
