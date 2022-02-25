import { Container } from './Style';

interface ActiveProps {
	status: string;
}

export default function Active({ status }: ActiveProps) {
	const isActive = status === 'active';
	return (
		<Container>
			<div className={isActive ? 'active' : 'disabled'}>
				{isActive ? ' ativo' : 'inativo'}
			</div>
		</Container>
	);
}
