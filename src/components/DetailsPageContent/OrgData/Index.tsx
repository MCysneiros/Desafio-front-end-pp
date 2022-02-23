import OrgDataBar from './OrgDataBar/Index';
import { Container } from './Style';

export default function OrgData() {
	return (
		<Container>
			<p>Dados organizacionais</p>
			<div className='gridBox'>
				<OrgDataBar typeOfBar='Departamento' textOfOrgBar='Comercial' />
				<OrgDataBar typeOfBar='Cargo' textOfOrgBar='Gerente' />
				<OrgDataBar typeOfBar='Unidade' textOfOrgBar='Unidade 1' />
				<OrgDataBar typeOfBar='Status' textOfOrgBar='Ativo' />
			</div>
		</Container>
	);
}
