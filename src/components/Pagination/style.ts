import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;

	& div {
		margin-right: 24px;
		p {
			font-size: 1rem;
			color: #587169;
		}
		display: flex;

		& div {
			margin-left: 24px;
			align-items: center;
			padding: 0 10px;
			border: 2px solid #cad6d1;
			box-sizing: border-box;
			border-radius: 8px;
			svg {
				color: var(--text-dark);
				width: 14px;
				height: 14px;
			}
			p {
				margin-right: 8px;
				color: var(--text);
			}
		}
	}
`;
