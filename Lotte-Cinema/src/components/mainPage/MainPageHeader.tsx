import styled from '@emotion/styled';

import { IcTicketBlack32, ImgLogo } from '@/assets/svg';

const MainPageHeader = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <S.Header>
      <S.LeftContainer>
        <S.MenuBox onClick={() => handleRefresh()}>
          <ImgLogo width="11.2rem" />
        </S.MenuBox>
      </S.LeftContainer>
      <S.RightContainer>
        <S.MenuBox onClick={() => handleRefresh()}>
          <IcTicketBlack32 width="3.2rem" />
        </S.MenuBox>
      </S.RightContainer>
    </S.Header>
  );
};

export default MainPageHeader;

const S = {
  Header: styled.header`
    z-index: 999;
    position: sticky;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.8rem;

    background-color: ${({ theme }) => theme.colors.WHITE100};
  `,
  LeftContainer: styled.nav``,
  RightContainer: styled.nav``,
  MenuBox: styled.li`
    display: flex;
    align-items: center;
    height: 3.2rem;

    list-style: none;
  `,
};
