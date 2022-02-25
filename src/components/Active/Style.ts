import styled from '@emotion/styled';

export const Container = styled.div`
	.active {
		background-color: var(--green-light);
		width: 72px;
		height: 24px;
		border-radius: 100000000px;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 4px 8px;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 116%;
		opacity: none;
	}

	.disabled {
		background-color: #eaefed;
		width: 72px;
		height: 24px;
		border-radius: 100000000px;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 4px 8px;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 116%;
	}
`;
