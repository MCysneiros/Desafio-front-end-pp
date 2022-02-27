import styled from '@emotion/styled';

export const Container = styled.div`
	border: 2px solid #e6e6e6;
	border-radius: 8px;
	padding: 24px;
	margin-top: 36px;
	p {
		font-weight: 600;
		font-size: 18px;
	}
	.gridBox {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 24px;

		@media (max-width: 720px) {
			display: flex;
			flex-direction: column;
		}
	}
`;
