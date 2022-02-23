import styled from '@emotion/styled';

export const Avatar = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	p {
		font-size: 12px;
		font-weight: 600;
		color: var(--text-dark);
		line-height: 140%;
	}
	img {
		margin-right: 8px;
		border-radius: 50%;
		border: 1px solid var(--green);
		width: 32px;
		height: 32px;
	}
`;
