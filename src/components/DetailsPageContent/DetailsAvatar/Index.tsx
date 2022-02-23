import { Container } from './Style';
import { FiUser } from 'react-icons/fi';

export default function DetailsAvatar() {
	return (
		<Container>
			<div className='avatarIcon'>
				<FiUser />
			</div>
			<div className='avatarName'>
				<p>Mothra Fernandes</p>
				<span>Mothrafernandes@gmail.com</span>
			</div>
		</Container>
	);
}
