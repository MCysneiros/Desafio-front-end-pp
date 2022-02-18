import styled from '@emotion/styled';

export const Container = styled.header`
	background: var(--white);
`;

export const Content = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding 0 2rem;
  height: 4rem;

  }
`;

export const LogoContainer = styled.div`
	margin-left: 2rem;
`;

export const Avatar = styled.div`
	margin: 0 10px;
  background: var(--green-light);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

	span {font-size: 0.875rem;
  display: inline-block;
  font-weight: 400;
  color: var(--text-dark);
}
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-right: 2rem;
`;

export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;

	p {
		font-size: 0.875rem;
		font-weight: 600;
	}
	span {
		margin-top: -0.5rem;
		display: inline-block;
		font-size: 0.75rem;
		color: var(--text-light);
	}
`;
