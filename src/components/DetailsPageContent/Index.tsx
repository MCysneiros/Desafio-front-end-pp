import React from 'react';
import useMatchMedia from '../../hooks/useWindowSize';
import DetailsAvatar from './DetailsAvatar/Index';
import OrgData from './OrgData/Index';
import PersonalInfo from './PerosnalInfo/Index';
import { Container } from './style';

interface Agent {
	agent_id: number;
	name: string;
	branch: string;
	department: string;
	image: string;
	role: string;
	status: string;
	phone: { ddd: string; ddi: string; number: string };
	birth_date: string;
	document: { type: string; number: string };
	email: string;
}

interface DetailsPageProps {
	agentData: Agent;
}

export default function DetailsPageContent({ agentData }: DetailsPageProps) {
	return (
		<Container>
			<DetailsAvatar
				image={agentData.image}
				name={agentData.name}
				email={agentData.email}
			/>
			<PersonalInfo
				document={agentData.document}
				phone={agentData.phone}
				birth_date={agentData.birth_date}
			/>
			<OrgData
				role={agentData.role}
				status={'ativo'}
				department={agentData.department}
				branch={agentData.branch}
			/>
		</Container>
	);
}
