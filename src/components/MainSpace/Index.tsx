import { Container, Content, TextContainer } from './Style';
import { FormEvent, useState, useEffect } from 'react';
import TabsList from '../TabsList/Index';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/router';
import DetailsPageContent from '../DetailsPageContent/Index';

interface Item {
	agent_id: number;
	name: string;
	branch: string;
	department: string;
	image: string;
	role: string;
	status: string;
}

interface MainSpaceProps {
	text: string;
	hasIcon: boolean;
	hasTabs: boolean;
	agents: Item[];
}

export default function MainSpace({
	text,
	hasIcon,
	hasTabs,
	agents,
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
					<TabsList agents={agents} onFormSubmit={onFormSubmit}></TabsList>
				)}
				{text === 'Detalhes do Colaborador' && <DetailsPageContent />}
			</Content>
		</Container>
	);
}
