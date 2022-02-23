import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
	margin-left: 12px;
	.avatarIcon {
		width: 80px;
		height: 80px;
		background-color: var(--disabled);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin-right: 12px;
		svg {
			width: 38px;
			height: 38px;
			stroke: #587169;
		}
	}
	.avatarName {
		p {
			font-size: 18px;
			font-weight: 600;
			color: var(--text-dark);
		}
		span {
			display: block;
			margin-top: -6px;
			font-size: 14px;
			font-weight: 400;
			color: var(--text);
		}
	}
`;
