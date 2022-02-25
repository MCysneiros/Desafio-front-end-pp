import OrgDataBar from '../DetailsPageContent/OrgData/OrgDataBar/Index';
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
interface GroupRules {
	role: string;
	permissions: Array<string>;
}

interface RoleData {
	name: string;
	department: string;
	grouprules: GroupRules[];
}
interface RolePageContent {
	roleData: RoleData;
}

export const RolesPageContent = ({ roleData }: RolePageContent) => {
	const renderingUserlist = roleData.grouprules.map(rules => {
		return (
			<Tr color='brand.300' key={rules.role}>
				<Td>
					<Box py={2}>{rules.role}</Box>
				</Td>
				<Td>
					{rules.permissions[0] ? (
						<Checkbox colorScheme={'green'} defaultChecked />
					) : (
						<Checkbox isDisabled />
					)}
				</Td>
				<Td>
					{rules.permissions[1] ? (
						<Checkbox colorScheme={'green'} defaultChecked />
					) : (
						<Checkbox isDisabled />
					)}
				</Td>
				<Td>
					{rules.permissions[2] ? (
						<Checkbox colorScheme={'green'} defaultChecked />
					) : (
						<Checkbox isDisabled />
					)}
				</Td>
			</Tr>
		);
	});

	return (
		<Container>
			<h3>Dados do cargo </h3>
			<div className='gridBox'>
				<OrgDataBar
					typeOfBar='Departamento'
					textOfOrgBar={roleData.department}
				/>
				<OrgDataBar typeOfBar='Cargo' textOfOrgBar={roleData.name} />
			</div>

			<h3>Listagem de permissões</h3>

			<Box
				className='BorderContainer'
				borderColor='brand.400'
				borderRadius='8px'
				mt={4}
				py='2'>
				<Table size='sm' variant='simple'>
					<Thead>
						<Tr color='brand.300'>
							<Th>
								<Box py='2px' mr={60}>
									Cargo
								</Box>
							</Th>
							<Th>ler</Th>
							<Th>Editar</Th>
							<Th>Excluir</Th>
						</Tr>
					</Thead>
					<Tbody>{renderingUserlist}</Tbody>
				</Table>
			</Box>
		</Container>
	);
};
