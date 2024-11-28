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
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 430px;
    height: 5rem;
    padding: 1rem 1.8rem;

    background-color: ${({ theme }) => theme.colors.WHITE100};
  `,
  LeftContainer: styled.nav`
    cursor: pointer;
  `,
  RightContainer: styled.nav`
    cursor: pointer;
  `,
  MenuBox: styled.li`
    display: flex;
    align-items: center;
    height: 3.2rem;

    list-style: none;
  `,
};
