import { Container, Content, TextContainer } from './Style';
import { FormEvent, useState, useEffect } from 'react';
import TabsList from '../TabsList/Index';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/router';
import DetailsPageContent from '../DetailsPageContent/Index';
import Pagination from '../Pagination/Index';
import { RolesPageContent } from '../RolesPageContent/Index';

interface Item {
	agent_id: number;
	name: string;
	branch: string;
	department: string;
	image: string;
	role: string;
	status: string;
	phone?: { ddd: string; ddi: string; number: string };
	birth_date?: string;
	document?: { type: string; number: string };
	email?: string;
}

interface RoleData {
	name: string;
	department: string;
	grouprules: Array<string>;
}

interface AgentData {
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
interface MainSpaceProps {
	text: string;
	hasIcon: boolean;
	hasTabs: boolean;
	agents?: Item[];
	agentData?: AgentData;
	roleData?: RoleData;
	isRoles?: boolean;
}

export default function MainSpace({
	text,
	hasIcon,
	hasTabs,
	agents,
	agentData,
	roleData,
	isRoles,
}: MainSpaceProps) {
	const router = useRouter();

	const onFormSubmit = async (event: FormEvent) => {
		event.preventDefault();
	};

	const handleClick = e => {
		e.preventDefault();
		router.push('/');
	};

	return (
		<Container>
			<TextContainer>
				{hasIcon && (
					<div onClick={handleClick} className='iconContainer'>
						<FiArrowLeft />
					</div>
				)}
				<h1>{text}</h1>
			</TextContainer>
			<Content>
				{hasTabs && (
					<div>
						<div className='contentOverflow'>
							<TabsList agents={agents} onFormSubmit={onFormSubmit}></TabsList>
						</div>
						<Pagination />
					</div>
				)}
				{text === 'Detalhes do Colaborador' && (
					<DetailsPageContent agentData={agentData} />
				)}

				{isRoles && <RolesPageContent roleData={roleData} />}
			</Content>
		</Container>
	);
}
