import { Container } from './style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RightPaginationProps {
	postPerPage: number;
	totalPosts: number;
	paginate: (pageNumber: number) => void;
	pageIndex: number;
}

export const RightPagination = ({
	postPerPage,
	totalPost,
	paginate,
	pageIndex,
}) => {
	const isCurrentItem = pageIndex < 5 ? 2 : 1;

	return (
		<Container>
			<nav className='icon-light'>
				<FiChevronLeft onClick={() => paginate(1)} />
			</nav>
			<p>{isCurrentItem} de 10</p>
			<div className='icon-dark'>
				<FiChevronRight onClick={() => paginate(2)} />
			</div>
		</Container>
	);
};
