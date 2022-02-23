import styled from '@emotion/styled';

export const Container = styled.div`
margin 0 auto;
	h1 {
		font-size: 32px;
		color: var(--text-dark);
	}
`;

export const Content = styled.div`
	margin: 0 auto;
	background: var(--white);
	height: 700px;
	width: 780.5px;
	overflow: hidden;
	box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
	border-radius: 8px;
	padding: 40px 24px;
`;

export const TextContainer = styled.div`
	display: flex;
	margin-top: 50px;
	margin-bottom: 16px;
	align-items: center;

	.iconContainer {
		width: 36px;
		height: 36px;
		background: var(--disabled);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin-right: 16px;
		cursor: pointer;
		trasition: all 0.2s;
		&:hover {
			transform: scale(1.1);
		}
		svg {
			width: 16px;
			height: 16px;
		}
	}
`;
