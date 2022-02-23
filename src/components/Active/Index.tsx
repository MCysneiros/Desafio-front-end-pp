import { Container } from './Style';

interface ActiveProps {
	status?: 'string';
}

export default function Active({ status }: ActiveProps) {
	return <Container>{status ? 'Ativo' : 'Inativo'}</Container>;
}
