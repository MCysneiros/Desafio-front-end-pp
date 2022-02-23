import React from 'react';
import { CardContainer, Container } from './Style';
import PersonalInfoItem from './PersonalInfoItem/Index';

export default function PersonalInfo() {
	return (
		<Container>
			<p className='headText'>Informações pessoais</p>
			<CardContainer>
				<PersonalInfoItem text='CPF' data='60118976060' />
				<PersonalInfoItem text='Telefone' data='+55 89 26355467' />
				<PersonalInfoItem text='Nascimento' data='29/11/1990' />
			</CardContainer>
		</Container>
	);
}
