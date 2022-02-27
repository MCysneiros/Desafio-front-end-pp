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
	box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
	border-radius: 8px;

	max-width: 780.5px;
	padding: 40px 24px;
	height: 770px;

	.pagination {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media (max-width: 720px) {
		border-radius: 0;
		width: 100vw;
		padding: 40px 10px 0;
		height: auto;
		h2 {
			font-size: 24px;
			margin-bottom: 24px;
			margin-left: 16px;
			color: var(--text-dark);
		}
	}
`;

export const TextContainer = styled.div`
	display: flex;
	margin-top: 50px;
	margin-bottom: 16px;
	align-items: center;

	@media (max-width: 720px) {
		align-items: flex-start;
	}
	}

	.iconH2 {
		font-weight: 600;
		font-size: 20px;
		color: #465953;
	}
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
		transition: all 0.2s;
		@media (max-width: 720px) {
			margin-right: 0;
		}
		&:hover {
			transform: scale(1.1);
		}
		svg {
			width: 16px;
			height: 16px;
		}
	}
`;
