import styled from '@emotion/styled';

export const Container = styled.header`
	background: var(--white);
`;

export const Content = styled.div`
position: relative;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding 0 2rem;
  height: 4rem;
  border-bottom: 1px solid var(--border-color);
	@media (max-width:720px){
		justify-content: center;
		&:after{
			display: none;
		}
  
`;

export const LogoContainer = styled.div`

	margin-left: 2rem;
	&:after {
		border-right: 1px solid var(--disabled);
		position: absolute;
		content: '';
		bottom: 0px;
		height: 62px;
		width: 32px;
		left: 66px;
		background-color: transparent;
	}
	@media (max-width:720px){
margin-left: 0;
		&:after{
			display: none;
		}
		
`;

export const Avatar = styled.div`
	margin: 0 10px;
	background: var(--green-light);
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;

	&:after {
		border-left: 1px solid var(--disabled);
		position: absolute;
		content: '';
		bottom: 0px;
		height: 62px;
		width: 32px;
		right: 184px;
		background-color: transparent;
	}

	span {
		font-size: 0.875rem;
		display: inline-block;
		font-weight: 400;
		color: var(--text-dark);
	}

	@media (max-width:720px){
		margin: 0;
		&:after{
			display: none;
		}
		
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1rem;
	@media (max-width: 720px) {
		position: absolute;
		left: 0;
	}
`;

export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	height: 1.875rem;

	p {
		font-size: 0.875rem;
		font-weight: 600;
	}
	span {
		margin-top: -0.2rem;
		display: inline-block;
		font-size: 0.75rem;
		color: var(--text-light);
	}
`;
