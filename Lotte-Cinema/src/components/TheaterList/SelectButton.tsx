import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface SelectButtonProps {
	children: ReactNode;
}

const SelectButton = ({ children }: SelectButtonProps) => {
	return (
		<S.Wrapper>
			<S.Text>{children}</S.Text>
			<S.SelectedNum>(1)</S.SelectedNum>
		</S.Wrapper>
	);
};

const S = {
	Wrapper: styled.button`
		width: 100%;
		height: 4.5rem;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;

		background-color: ${({ theme }) => theme.colors.RED02};
		color: ${({ theme }) => theme.colors.WHITE100};
	`,
	Text: styled.span`
		${({ theme }) => theme.typographies.n_head03_reg}
	`,
	SelectedNum: styled.span`
		${({ theme }) => theme.typographies.r_body01}
	`,
};

export default SelectButton;
