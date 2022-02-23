import styled from '@emotion/styled';

export const Container = styled.div`
	border: 2px solid #cad6d1;
	padding: 20px;
	align-items: center;
	background-color: #f5faf8;
	border-radius: 8px;
	position: relative;
	margin-top: 24px;
	span {
		position: absolute;
		top: -13px;
		font-size: 14px;
		color: var(--text-light);
		z-index: 1;
		background-image: linear-gradient(to top, #f5faf8 50%, #fff 50%);
		padding: 0 2px;
	}
	.orgDataTextBar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		p {
			font-size: 16px;
			line-height: 24px;
			color: var(--text-dark);
			font-weight: 500;
		}
	}
	svg {
		height: 16px;
		width: 16px;
		stroke: var(--text-dark);
	}
`;
