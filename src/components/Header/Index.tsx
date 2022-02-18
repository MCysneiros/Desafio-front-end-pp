import {
	Container,
	Content,
	Profile,
	Avatar,
	ProfileContent,
	LogoContainer,
} from './style';
import Image from 'next/image';
import illustration from '../../../static/assets/Group.svg';

export function Header() {
	return (
		<Container>
			<Content>
				<LogoContainer>
					<Image src={illustration} alt='Illustration' />
				</LogoContainer>
				<Profile>
					<Avatar>
						<span>LZ</span>
					</Avatar>
					<ProfileContent>
						<p>Luiz Zlochevsky</p>
						<span>meus dados</span>
					</ProfileContent>
				</Profile>
			</Content>
		</Container>
	);
}
