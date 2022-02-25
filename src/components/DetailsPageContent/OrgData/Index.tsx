import OrgDataBar from './OrgDataBar/Index';
import { Container } from './Style';

interface OrgDataProps {
	role: string;
	status: string;
	department: string;
	branch: string;
}

export default function OrgData({
	role,
	status,
	department,
	branch,
}: OrgDataProps) {
	return (
		<Container>
			<p>Dados organizacionais</p>
			<div className='gridBox'>
				<OrgDataBar typeOfBar='Departamento' textOfOrgBar={department} />
				<OrgDataBar typeOfBar='Cargo' textOfOrgBar={role} />
				<OrgDataBar typeOfBar='Unidade' textOfOrgBar={branch} />
				<OrgDataBar typeOfBar='Status' textOfOrgBar={status} />
			</div>
		</Container>
	);
}
