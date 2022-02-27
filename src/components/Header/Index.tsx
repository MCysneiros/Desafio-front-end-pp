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
import useMatchMedia from '../../hooks/useWindowSize';

export function Header() {
	const isMobile = useMatchMedia('(min-width:480px)', true);

	return (
		<Container>
			{isMobile ? (
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
			) : (
				<Content>
					<Profile>
						<Avatar>
							<span>LZ</span>
						</Avatar>
					</Profile>
					<LogoContainer>
						<Image src={illustration} alt='Illustration' />
					</LogoContainer>
				</Content>
			)}
		</Container>
	);
}
