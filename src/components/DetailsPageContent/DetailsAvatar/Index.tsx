import { Container } from './Style';
import { FiUser } from 'react-icons/fi';

interface DetailsAvatarProps {
	name: string;
	email: string;
	image: string;
}

export default function DetailsAvatar({ name, email, image }) {
	return (
		<Container>
			<div className='avatarIcon'>
				<img src={image} alt={name} />
			</div>
			<div className='avatarName'>
				<p>{name}</p>
				<span>{email}</span>
			</div>
		</Container>
	);
}
