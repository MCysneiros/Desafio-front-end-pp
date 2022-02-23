import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	padding: 16px;
	width: 230px;
	height: 70px;
	background: #f5faf8;
	border-radius: 8px;
	border: 2px solid #cad6d1;
	.infoCardContainer {
		align-items: center;
		display: flex;
	}

	.infoCardIcon {
		width: 38px;
		height: 38px;
		margin-right: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #cad6d1;
		border-radius: 50%;
	}
	.infoCardText {
		flex-direction: column;
		color: var(--text);
		p {
			font-weight: 600;
			font-size: 14px;
			line-height: 100%;
		}
		span {
			display: block;
			font-weight: normal;
			font-size: 12px;
			line-height: 120%;
		}
		display: flex;
	}
`;
