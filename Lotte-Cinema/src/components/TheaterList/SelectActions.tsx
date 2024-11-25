import styled from '@emotion/styled';

import SelectButton from './SelectButton';

const SelectActions = () => {
	return (
		<S.Wrapper>
			<S.PinContainer>영화관은 최대 3개까지 선택할 수 있습니다.</S.PinContainer>
			<S.ButtonContainer>
				<SelectButton>영화관 선택</SelectButton>
			</S.ButtonContainer>
		</S.Wrapper>
	);
};

const S = {
	Wrapper: styled.div`
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		background-color: ${({ theme }) => theme.colors.GRAY02};
	`,

	PinContainer: styled.div`
		width: 100%;
		height: 4.6rem;
		padding: 0 1.8rem;
		display: flex;
		align-items: center;

		${({ theme }) => theme.typographies.n_body02_reg}
		color: ${({ theme }) => theme.colors.GRAY09};
	`,

	ButtonContainer: styled.div`
		width: 100%;
		padding: 2rem;
	`,
};

export default SelectActions;