import styled from '@emotion/styled';

import { IcArrowRightWhite10 } from '@/assets/svg';

interface BtnProps {
	label: string;
}
const ViewAllBtn = ({ label }: BtnProps) => {
	return (
		<S.BtnWrapper>
			<S.BtnContainer>
				{label} <IcArrowRightWhite10 width="1.4rem" height="1.4rem" />
			</S.BtnContainer>
		</S.BtnWrapper>
	);
};

export default ViewAllBtn;

const S = {
	BtnWrapper: styled.button`
		display: flex;
		width: 7.1rem;
		padding: 0.2rem 0.5rem;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	`,

	BtnContainer: styled.div`
		${({ theme }) => theme.typographies.n_body03_reg};
		color: ${({ theme }) => theme.colors.GRAY04};

		display: flex;
		width: 5.6rem;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
	`,
};
