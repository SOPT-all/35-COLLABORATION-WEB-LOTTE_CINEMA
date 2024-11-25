import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import { IcArrowLeftBlack24, IcHomeBlack24 } from '@/assets/svg';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LeftContainer>
        <S.MenuBox onClick={() => navigate(-1)}>
          <IcArrowLeftBlack24 width="24px" height="24px" />
        </S.MenuBox>
        <S.MenuBox onClick={() => navigate('/')}>
          <IcHomeBlack24 width="24px" height="24px" />
        </S.MenuBox>
      </S.LeftContainer>
      <S.CenterContainer>
        <h1>{title}</h1>
      </S.CenterContainer>
    </S.Header>
  );
};

export default Header;

const S = {
  Header: styled.header`
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    gap: 21%;
    align-items: center;
    height: 5rem;
    padding: 1.3rem 12rem 1.3rem 1.4rem;
    background-color: ${({ theme }) => theme.colors.WHITE100};
  `,
  LeftContainer: styled.nav`
    display: flex;
    gap: 1.6rem;
    align-items: center;
  `,

  MenuBox: styled.li`
    list-style-type: none;
  `,

  CenterContainer: styled.section`
    width: 100%;

    & h1 {
      ${({ theme }) => theme.typographies.n_head02_reg};
      color: ${({ theme }) => theme.colors.BLACK100};
      text-align: center;
    }
  `,
};
