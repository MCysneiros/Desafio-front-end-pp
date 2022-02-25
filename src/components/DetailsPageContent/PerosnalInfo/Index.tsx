import React from 'react';
import { CardContainer, Container } from './Style';
import PersonalInfoItem from './PersonalInfoItem/Index';

interface PersonalInfoItemProps {
	phone: { ddd: string; ddi: string; number: string };
	birth_date: string;
	document: { type: string; number: string };
}

export default function PersonalInfo({
	phone,
	birth_date,
	document,
}: PersonalInfoItemProps) {
	return (
		<Container>
			<p className='headText'>Informações pessoais</p>
			<CardContainer>
				<PersonalInfoItem text={document.type} data={document.number} />
				<PersonalInfoItem
					text='Telefone'
					data={`+${phone.ddi} ${phone.ddd} ${phone.number}`}
				/>
				<PersonalInfoItem text='Nascimento' date={birth_date} />
			</CardContainer>
		</Container>
	);
}
