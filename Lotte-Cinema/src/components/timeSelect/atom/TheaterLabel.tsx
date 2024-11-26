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
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem 0.6rem;

    background-color: ${({ theme }) => theme.colors.RED02};
    border-radius: 2rem;

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
