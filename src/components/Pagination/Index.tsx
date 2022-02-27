import { Container } from './style';
import { FiChevronDown } from 'react-icons/fi';

interface PaginationProps {
	pageNumber: number;
	total: number;
}

export default function Pagination({ pageNumber, total }: PaginationProps) {
	const isCurrentItem = pageNumber < 5 ? 9 : pageNumber;
	return (
		<Container>
			<div>
				<p>
					Mostrando {isCurrentItem} de {total} registros
				</p>
				<div>
					<p>10</p>
					<FiChevronDown />
				</div>
			</div>
		</Container>
	);
}
