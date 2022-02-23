import { Avatar } from './Style';

interface TableAvatarProps {
	name: string;
	src: string;
}

export default function TableAvatar({ name, src }: TableAvatarProps) {
	return (
		<Avatar>
			<img src={src} alt='matheus Cysneiros' />
			<p>{name}</p>
		</Avatar>
	);
}
