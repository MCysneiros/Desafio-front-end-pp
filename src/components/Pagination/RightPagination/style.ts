import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;

	p {
		font-weight: 600;
		color: var(--text-dark);
	}

	.icon-light {
		border: 1px solid var(--text-light);
		width: 24px;
		align-items: center;
		display: flex;
		justify-content: center;
		height: 24px;
		margin-right: 8px;
		border-radius: 8px 0 0 8px;
		cursor: pointer;
	}
	.icon-dark {
		border: 1px solid var(--text-dark);
		width: 24px;
		align-items: center;
		display: flex;
		justify-content: center;
		height: 24px;
		margin-left: 8px;
		border-radius: 0 8px 8px 0;
		cursor: pointer;
	}
`;
