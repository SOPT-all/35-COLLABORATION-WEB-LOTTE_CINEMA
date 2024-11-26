import styled from '@emotion/styled';

import { IcEventBlack24, IcMenuBlack24, IcMyBlack24, IcTicketWhite24, IcTimeBlack24, ImgCircle56 } from '@/assets/svg';

// Menu 순서 IcEventBlack24 / IcTimeBlack24 / BtnCircle / IcMyBlack24 / IcMenuBlack24
const NavFooter = () => {
  return (
    <S.NavContainer>
      <S.MenuBox>
        <IcEventBlack24 width="2.4rem" height="2.4rem" />
        <S.MenuText>이벤트</S.MenuText>
      </S.MenuBox>
      <S.MenuBox>
        <IcTimeBlack24 width="2.4rem" height="2.4rem" />
        <S.MenuText>상영시간표</S.MenuText>
      </S.MenuBox>
      <S.MenuBox className="CenterMenu">
        <S.ImgCircleContainer>
          <ImgCircle56 width="5.6rem" height="5.6rem" />
        </S.ImgCircleContainer>
        <S.OverlayContainer>
          <IcTicketWhite24 width="2.4rem" height="2.4rem" />
          <S.MenuCenterText>바로예매</S.MenuCenterText>
        </S.OverlayContainer>
      </S.MenuBox>
      <S.MenuBox>
        <IcMyBlack24 width="2.4rem" height="2.4rem" />
        <S.MenuText>마이</S.MenuText>
      </S.MenuBox>
      <S.MenuBox>
        <IcMenuBlack24 width="2.4rem" height="2.4rem" />
        <S.MenuText>메뉴</S.MenuText>
      </S.MenuBox>
    </S.NavContainer>
  );
};

export default NavFooter;

const S = {
  NavContainer: styled.div`
    width: 100%;
    height: 5.4rem;
    display: flex;
    justify-content: space-around;
  `,
  MenuBox: styled.div`
    width: 6.4rem;
    height: 6.4rem; // height도 지정해주기
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.typographies.n_caption02_med};

    &.CenterMenu {
      position: relative;
      width: 5.4rem;
      height: 5.4rem;
      transform: translateY(-0.8rem);
    }
  `,
  MenuCenter: styled.div`
    width: 100%;
    height: 100%;
  `,

  MenuText: styled.li`
    list-style: none;
  `,

  ImgCircleContainer: styled.div`
    position: absolute; /* 부모 기준으로 중앙 배치 */
    width: 5.6rem;
    height: 5.6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; /* 가장 아래로 배치 */
  `,

  OverlayContainer: styled.div`
    position: absolute; /* 부모 기준으로 중앙 배치 */
    height: 5.6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2; /* ImgCircle 위에 배치 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  MenuCenterText: styled.p`
    color: ${({ theme }) => theme.colors.WHITE100};
    width: 3.4rem;
  `,
};
