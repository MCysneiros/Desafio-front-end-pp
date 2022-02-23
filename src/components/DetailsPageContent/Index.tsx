import React from 'react';
import DetailsAvatar from './DetailsAvatar/Index';
import OrgData from './OrgData/Index';
import PersonalInfo from './PerosnalInfo/Index';
import { Container } from './style';

export default function DetailsPageContent() {
	return (
		<Container>
			<DetailsAvatar />
			<PersonalInfo />
			<OrgData />
		</Container>
	);
}
