import styled from '@emotion/styled';

import Pin from './Pin';
import SelectButton from './SelectButton';

interface SelectActionsProps {
  selectedDetail: string[];
  deleteDetail: (name: string) => void;
}

const SelectActions = ({ selectedDetail, deleteDetail }: SelectActionsProps) => {
  return (
    <S.Wrapper>
      <S.PinContainer>
        {selectedDetail.length === 0
          ? '영화관은 최대 3개까지 선택할 수 있습니다.'
          : selectedDetail.map((detail, idx) => (
              <Pin name={detail} deleteDetail={deleteDetail} key={idx}>
                {detail}
              </Pin>
            ))}
      </S.PinContainer>
      <S.ButtonContainer>
        <SelectButton selectedNum={selectedDetail.length}>영화관 선택</SelectButton>
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
    align-items: flex-end;
    gap: 0.8rem;

    ${({ theme }) => theme.typographies.n_body02_reg}
    color: ${({ theme }) => theme.colors.GRAY09};
  `,

  ButtonContainer: styled.div`
    width: 100%;
    padding: 2rem;
  `,
};

export default SelectActions;
