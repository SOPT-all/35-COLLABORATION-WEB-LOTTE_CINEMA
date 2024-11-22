import styled from '@emotion/styled';

import { IcCloseGray1414 } from '@/assets/svg';

interface LabelProps {
  label: string;
}

const TheaterLabel = ({ label }: LabelProps) => {
  return (
    <S.Wrapper>
      <p>{label}</p>
      <button>
        <IcCloseGray1414 width="1.4rem" height="1.4rem" />
      </button>
    </S.Wrapper>
  );
};

export default TheaterLabel;

const S = {
  Wrapper: styled.div`
    display: flex;
    padding: 0.5rem 1rem 0.6rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.RED02};

    & p {
      ${({ theme }) => theme.typographies.n_body03_reg}
      color: ${({ theme }) => theme.colors.WHITE100};
    }

    & button {
      display: flex;
      padding: 0.1rem;
    }
  `,
};
