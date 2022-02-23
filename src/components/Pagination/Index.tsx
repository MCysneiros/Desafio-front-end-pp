import { Container } from './style';
import { FiChevronDown } from 'react-icons/fi';

export default function Pagination() {
	return (
		<Container>
			<div>
				<p>Mostrando 10 de 50 registros</p>
				<div>
					<p>10</p>
					<FiChevronDown />
				</div>
			</div>
		</Container>
	);
}
