import styled from '@emotion/styled';

export const MobileContainers = styled.div`
	display: flex;
	padding: 0.5rem;
	box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
	padding: 20px 16px;
	border-radius: 8px;
	flex-direction: column;
	.topSection {
		margin-bottom: 40px;
	}
	.topModal {
		padding: 10px 20px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		border: 2px solid #cad6d1;
		border-radius: 8px;
		p {
			font-size: 16px;
			line-height: 24px;
			color: var(--text);
			font-weight: 500;
		}
	}

	.renderedList {
		list-style: none;
	}
	.ListText {
		font-weight: 600;
		font-size: 12px;
		line-height: 140%;
		color: var(--text);
		margin-bottom: 8px;
	}
	.listItem {
		border-radius: 8px;
		padding: 16px;
		border: 2px solid #eaefed;
	}
	.listDisplay {
		display: flex;
		justify-content: space-between;
		p {
			font-weight: 600;
			font-size: 12px;
			line-height: 140%;
			color: var(--text);
		}
		svg {
			stroke: var(--text);
			font-size: 20px;
		}
	}
	.active {
		border: 2px solid var(--green-light);
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.loadMoreButton {
		margin-top: 16px;
		border: 2px solid var(--green-light);
		border-radius: 8px;
		padding: 16px 40px;
		color: var(--text-dark);
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		svg {
			stroke: var(--green);
			font-size: 24px;
			color: var(--green);
		}
	}
	.actionButton {
		margin-top: 16px;
		border: 2px solid var(--green-light);
		border-radius: 8px;
		padding: 16px 94px;
		color: var(--text-dark);
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		svg {
			stroke: var(--green);
			font-size: 24px;
			color: var(--green);
		}
	}
	.listGrid {
		margin-top: 24px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 16px;

		.listGridItem {
			flex-direction: column;
			p {
				font-weight: 600;
				font-size: 12px;
				color: var(--text);
				margin: 2px 0px;
			}
			span {
				font-size: 14px;
				line-height: 100%;
				color: var(--text);
			}
		}
	}

	.roleSpan {
		font-size: 14px;
		line-height: 100%;
		color: var(--text);
	}
`;
