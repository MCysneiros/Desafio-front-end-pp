import { Container, Content } from './Styles';
import { FiSearch } from 'react-icons/fi';
import { FormEvent, useState } from 'react';

interface searchBarProps {
	searchText: string;
}

export default function SearchBar({ searchText }: searchBarProps) {
	const [search, setSearch] = useState('');
	const [term, setTerm] = useState('');

	const onFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		setTerm(search);
		console.log(term);
	};

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
