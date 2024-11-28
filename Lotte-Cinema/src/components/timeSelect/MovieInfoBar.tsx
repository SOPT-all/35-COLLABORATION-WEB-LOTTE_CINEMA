import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMovieListQuery } from '@/hooks/query';

import { IcAge1216, IcAge1916, IcAgeAll16 } from '@/assets/svg';

import { runningTimeFormat } from '@/utils';

import ArrowBtn from '../commons/ArrowBtn';
import TheaterLabel from './atom/TheaterLabel';

type MovieInfoBarProps = {
  locs: string[];
  onDelete: (loc: string) => void;
};

const MovieInfoBar = ({ locs, onDelete }: MovieInfoBarProps) => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState({ title: '', rating: '', showtime: 0 });
  const [selectTitle, setSelectTitle] = useState('청설');

  const { data } = useMovieListQuery();

  const handlePosterClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const value = e.currentTarget.dataset.value;
    if (value) setSelectTitle(value);
  };

  useEffect(() => {
    if (data) {
      const movieInfo = data.find((e) => e.title === selectTitle);
      if (movieInfo) {
        setSelectedMovie(movieInfo);
      }
    }
  }, [data, selectTitle]);

  const { title, showtime, rating } = selectedMovie;

  const ageIcons: Record<string, JSX.Element> = {
    '12': <IcAge1216 width="1.6rem" />,
    청불: <IcAge1916 width="1.6rem" />,
    ALL: <IcAgeAll16 width="1.6rem" />,
  };
  const ageIcon = ageIcons[rating] || <></>;

  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.MovieInfoContainer>
            <S.MovieTextBox>
              <h1>{title}</h1>
              {ageIcon}
              <p>{`${showtime}분 (${runningTimeFormat(showtime)})`}</p>
            </S.MovieTextBox>
            <ArrowBtn label="전체 보기" />
          </S.MovieInfoContainer>
          <S.PosterContainer>
            {data &&
              data.map((poster, i) => (
                <li
                  key={`poster-${poster.movieId}`}
                  data-value={poster.title}
                  onClick={handlePosterClick}
                  className={poster.title !== selectTitle ? 'shadow' : ''}
                >
                  <img src={poster.imageUrl}></img>
                </li>
              ))}
          </S.PosterContainer>
          <S.TheaterContainer>
            <S.TheaterBox>
              {locs.map((loc, i) => (
                <li key={`chip-${i}`}>
                  <TheaterLabel label={loc} onDelete={onDelete} />
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

    & li.shadow {
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
