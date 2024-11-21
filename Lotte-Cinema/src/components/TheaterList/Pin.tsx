import styled from '@emotion/styled';

import { ReactNode } from 'react';

import { IcCloseGray1414 } from '@/assets/svg';

interface PinProps {
	children: ReactNode;
}

const Pin = ({ children }: PinProps) => {
	return (
		<S.Wrapper>
			<S.Text>{children}</S.Text>
			<IcCloseGray1414 width={14} />
		</S.Wrapper>
	);
};

const S = {
	Wrapper: styled.div`
		display: flex;
		gap: 0.4rem;
		align-items: center;
		margin-top: 100px;
		padding: 0.6rem 1rem;

		background-color: ${({ theme }) => theme.colors.WHITE100};
		border-radius: 99px;
	`,
	Text: styled.span`
		white-space: nowrap;
		${({ theme }) => theme.typographies.n_body03_reg}
		color: ${({ theme }) => theme.colors.GRAY14};
	`,
};

export default Pin;
