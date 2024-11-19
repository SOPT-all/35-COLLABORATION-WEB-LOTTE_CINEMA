import styled from '@emotion/styled';

const S = {
	Header: styled.header`
		display: flex;
		width: 100%;
		height: 5rem;
		padding: 1.3rem 12rem 1.3rem 1.4rem;
		align-items: center;
		gap: 4rem;
	`,
	LeftContainer: styled.nav`
		display: flex;
		align-items: center;
		gap: 1.6rem;
	`,

	MenuBox: styled.li`
		list-style-type: none;
	`,

	CenterContainer: styled.section`
		width: 12.2rem;

		& h1 {
			${({ theme }) => theme.typographies.n_head02_reg};
			color: ${({ theme }) => theme.colors.BLACK100};
			text-align: center;
		}
	`,
};

export default S;
