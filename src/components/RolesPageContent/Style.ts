import styled from '@emotion/styled';

export const Container = styled.div`
	.gridBox {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 24px;
		margin-bottom: 60px;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
		}

		h3 {
			margin: 40px 0 20px;
			color: var(--text-dark);
			font-size: 1rem;
		}
		svg {
			cursor: pointer;
		}
	}
`;
