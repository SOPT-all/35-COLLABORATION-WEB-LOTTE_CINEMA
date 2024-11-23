import styled from '@emotion/styled';

// 캐러셀 다운로드 하기는 했는데 적용 제대로 해보기 !
import {
  IcArrowRightGray0910,
  ImgThumbnailSmallBellybear,
  ImgThumbnailSmallBoyhood,
  ImgThumbnailSmallKoreasalefesta,
  ImgThumbnailSmallMorezoom,
  ImgThumbnailSmallNavermembership,
  ImgThumbnailSmallPolarbear,
  ImgThumbnailSmallSofa,
  ImgThumbnailSmallVip,
} from '@/assets/svg';

const EventAdvertising = () => {
  const EveryAdvertisement = [
    {
      image: ImgThumbnailSmallBellybear,
      title: '벨리곰 MD 런칭(feat. 키링, 손거울)',
      description: '벨리곰 X 꼬냥이 GET',
    },
    {
      image: ImgThumbnailSmallBoyhood,
      title: '<보이후드> 스페셜 아트카드 증정 안내',
      description: '오리지널 피규어 받자!',
    },
    {
      image: ImgThumbnailSmallKoreasalefesta,
      title: '2024 코리아 세일페스타',
      description: '영화 콤보 3천원 할인 혜택받기',
    },
    { image: ImgThumbnailSmallMorezoom, title: 'SOPT 롯데시네마 조 화이팅', description: '웹 파트 화이팅' },
    {
      image: ImgThumbnailSmallNavermembership,
      title: '네이버플러스멤버십 회원 대상 롯데시네마 할인 혜택!',
      description: '제휴',
    },
    {
      image: ImgThumbnailSmallPolarbear,
      title: '<레드 원> 오리지널 굿즈 경품 이벤트!',
      description: '오리지널 피규어 받자',
    },
    { image: ImgThumbnailSmallSofa, title: '대관단체 연말 시즌 사전 접수 시작!', description: '오리지널 피규어 받자!' },
    { image: ImgThumbnailSmallVip, title: '2024 VIP 특별 제휴혜택', description: '추천' },
  ];

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
