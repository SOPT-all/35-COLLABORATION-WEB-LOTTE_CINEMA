import styled from '@emotion/styled';

import { EveryAdvertisement } from '@/constants/mocks/advertisement';

import { IcArrowRightGray0910 } from '@/assets/svg';

// 캐러셀 다운로드 하기는 했는데 적용 제대로 해보기 !

const EventAdvertising = () => {
  return (
    <S.EventAdsContainer>
      <S.EventAdsHeader>
        <S.Title>이벤트</S.Title>
        <S.EveryEvent>
          <li>전체 보기&nbsp;</li>
          <li>
            <IcArrowRightGray0910 width="1rem" />
          </li>
        </S.EveryEvent>
      </S.EventAdsHeader>
      <S.AdsCollection>
        {EveryAdvertisement.map((item, index) => (
          <S.AdItem key={index}>
            <S.AdImage>
              <item.image width="100%" style={{ borderRadius: '4px' }} />
            </S.AdImage>
            <S.AdInformation>
              <S.AdTitle>{item.title}</S.AdTitle>
              <S.AdDescription>{item.description}</S.AdDescription>
            </S.AdInformation>
          </S.AdItem>
        ))}
      </S.AdsCollection>
    </S.EventAdsContainer>
  );
};

export default EventAdvertising;

const S = {
  EventAdsContainer: styled.section`
    width: 90%;
    margin: 3.2rem 0;
  `,
  EventAdsHeader: styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.8rem;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.typographies.n_head01};
    color: ${({ theme }) => theme.colors.BLACK100};
  `,
  EveryEvent: styled.ul`
    list-style: none;
    ${({ theme }) => theme.typographies.n_body03_med};
    color: ${({ theme }) => theme.colors.GRAY09};
    display: flex;
  `,
  AdsCollection: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 83.89%);
    grid-template-rows: repeat(4, 1fr);
    overflow: scroll;
    gap: 0.6rem 1rem;
  `,
  AdItem: styled.div`
    background-color: ${({ theme }) => theme.colors.GRAY01};
    border-radius: 4px;
    height: 4.8rem;
    display: flex;
    gap: 1rem;
  `,
  AdInformation: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
  `,
  AdImage: styled.div`
    width: 4.8rem;
  `,
  AdTitle: styled.div``,
  AdDescription: styled.div``,
};
