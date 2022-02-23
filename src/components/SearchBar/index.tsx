import { Container, Content } from './Styles';
import { FiSearch } from 'react-icons/fi';
import { FormEvent, useState } from 'react';

interface searchBarProps {
	searchText: string;
	onFormSubmit: (event: FormEvent) => void;
}

export default function SearchBar({
	searchText,
	onFormSubmit,
}: searchBarProps) {
	const [search, setSearch] = useState('');

	return (
		<Container>
			<span>Pesquisar por</span>
			<Content onSubmit={onFormSubmit}>
				<FiSearch />
				<input
					type='text'
					placeholder={`Pesquise por ${searchText}`}
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</Content>
		</Container>
	);
}
