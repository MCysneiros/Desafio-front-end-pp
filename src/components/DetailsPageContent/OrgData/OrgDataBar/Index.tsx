import { Container } from './Style';
import { FiChevronDown } from 'react-icons/fi';

interface OrgDataBarProps {
	typeOfBar: string;
	textOfOrgBar: string;
}

export default function OrgDataBar({
	typeOfBar,
	textOfOrgBar,
}: OrgDataBarProps) {
	return (
		<Container>
			<span>{typeOfBar}</span>
			<div className='orgDataTextBar'>
				<p>{textOfOrgBar}</p>
				<FiChevronDown />
			</div>
		</Container>
	);
}
