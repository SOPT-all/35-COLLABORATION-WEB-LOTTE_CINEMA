import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import Img4m44s from '@/assets/img/Img4m44s.png';
import ImgAmazonhms from '@/assets/img/ImgAmazonhms.png';
import ImgDeadline from '@/assets/img/ImgDeadline.png';
import ImgGladiator from '@/assets/img/ImgGladiator.png';
import ImgHoshimachi from '@/assets/img/ImgHoshimachi.png';
import ImgKiminonamaewa from '@/assets/img/ImgKiminonamaewa.png';
import ImgSummerwars from '@/assets/img/ImgSummerwars.png';
import { IcAge1216, IcAge1916, IcAgeAll16 } from '@/assets/svg';

import { runningTimeFormat } from '@/utils';

import ArrowBtn from '../commons/ArrowBtn';
import TheaterLabel from './atom/TheaterLabel';

const MovieInfoBar = () => {
  const navigate = useNavigate();
  // TODO API 완성시, 로직 분리할 예정
  const Title = '아마존 활명수';
  const runningTime = 122;
  const posters = [ImgAmazonhms, Img4m44s, ImgDeadline, ImgGladiator, ImgHoshimachi, ImgKiminonamaewa, ImgSummerwars];
  const locs = ['건대입구', '강동', '청량리'];
  const ageLimit: string = '12';
  let ageIcon: JSX.Element = <></>;

  // 영화 연령에 따라, 연령제한 ICON 선택적 랜더링
  switch (ageLimit as '12' | '19' | 'All') {
    case '12':
      ageIcon = <IcAge1216 width="1.6rem" />;
      break;
    case '19':
      ageIcon = <IcAge1916 width="1.6rem" />;
      break;
    case 'All':
      ageIcon = <IcAgeAll16 width="1.6rem" />;
      break;
    default:
      ageIcon = <></>;
  }
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.MovieInfoContainer>
            <S.MovieTextBox>
              <h1>{Title}</h1>
              {ageIcon}
              <p>{`${runningTime}분 (${runningTimeFormat(runningTime)})`}</p>
            </S.MovieTextBox>
            <ArrowBtn label="전체 보기" />
          </S.MovieInfoContainer>
          <S.PosterContainer>
            {posters.map((poster, i) => (
              <li key={`poster-${i}`}>
                <img src={poster}></img>
              </li>
            ))}
          </S.PosterContainer>
          <S.TheaterContainer>
            <S.TheaterBox>
              {locs.map((loc, i) => (
                <li key={`chip-${i}`}>
                  <TheaterLabel label={loc} />
                </li>
              ))}
            </S.TheaterBox>
            <ArrowBtn
              label="극장 추가"
              onClick={() => {
                navigate('/theaters');
              }}
            />
          </S.TheaterContainer>
        </S.Layout>
      </S.Wrapper>
    </>
  );
};

export default MovieInfoBar;

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    height: 21.2rem;
    padding: 1.6rem 0 1.6rem 1.8rem;

    background: ${({ theme }) => theme.colors.GRAY14};
  `,

  Layout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
    width: 100%;
  `,

  MovieInfoContainer: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,

  MovieTextBox: styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: space-between;

    & h1 {
      ${({ theme }) => theme.typographies.n_head02_bold}
      color: ${({ theme }) => theme.colors.WHITE100}
    }

    & p {
      ${({ theme }) => theme.typographies.r_body03_reg}
      color: ${({ theme }) => theme.colors.GRAY08};
    }
  `,

  PosterContainer: styled.ul`
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    align-items: center;
    align-self: stretch;
    overflow-x: auto;

    & img {
      width: 8rem;
      height: 11rem;
    }

    & li:not(:first-of-type) {
      filter: brightness(0.5);
    }
  `,

  TheaterContainer: styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,

  TheaterBox: styled.ul`
    display: flex;
    gap: 0.6rem;
  `,
};
