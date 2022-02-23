import styled from '@emotion/styled';

export const Container = styled.div`
	margin-top: 20px;
	border: 2px solid #cad6d1;
	border-radius: 8px;
	padding: 10px;
	display: flex;
	align-items: center;
	position: relative;
	span {
		position: absolute;
		background-color: color(-var(white));
		bottom: 35px;
		font-size: 14px;
		display: block;
		color: var(--text-light);
		z-index: 1;
		background: white;
		padding: 0 2px;
	}
`;

export const Content = styled.form`
	display: flex;
	color: var(--text-dark);
	font-size: 1rem;
	align-items: center;
	input {
		width: 600px;
		outline: none;
		&::placeholder {
			color: var(--text-dark);
		}
	}
	svg {
		width: 18px;
		height: 18px;
		margin-right: 10px;
	}
`;
