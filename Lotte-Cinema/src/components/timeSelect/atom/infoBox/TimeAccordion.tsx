import styled from '@emotion/styled';

import { useState } from 'react';

import { IcArrowDown20, IcArrowTop20 } from '@/assets/svg';

import { TimeTablePropType } from '@/types/timeSelect';

import TimeCard from './TimeCard';

const TimeAccordion = ({ num, info, locs, selectDate, selectedMovie }: TimeTablePropType) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <S.TitleHeader onClick={toggleAccordion}>
        <S.TitleContainer $isOpen={isOpen}>
          <h1>{locs[num]}</h1>
          {isOpen ? <IcArrowTop20 width="2rem" /> : <IcArrowDown20 width="2rem" />}
        </S.TitleContainer>
      </S.TitleHeader>
      {isOpen && (
        <S.InfoAccordion $isOpen={isOpen}>
          <S.InfoContainer>
            <S.InfoTitle>
              <p>{info.name}</p>

              {info.subname.trim() && (
                <>
                  <span />
                  <p>{info.subname}</p>
                </>
              )}
            </S.InfoTitle>
            <S.Description>{info.description}</S.Description>
            <S.InfoContent>
              {info.timesList.map((timesList, i) => (
                <TimeCard
                  key={i}
                  loc={locs[num]}
                  allTimeList={info.timesList}
                  timesList={timesList}
                  theater={info.name}
                  subTheaterInfo={info.subname}
                  selectDate={selectDate}
                  selectedMovie={selectedMovie}
                />
              ))}
            </S.InfoContent>
          </S.InfoContainer>
        </S.InfoAccordion>
      )}
      <S.ShadowLine />
    </>
  );
};

export default TimeAccordion;

const S = {
  TitleHeader: styled.header`
    display: flex;
    height: 5.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
  `,

  Description: styled.p`
    color: ${({ theme }) => theme.colors.GRAY09};
    ${({ theme }) => theme.typographies.r_caption}
  `,

  TitleContainer: styled.div<{ $isOpen: boolean }>`
    display: flex;
    width: 100%;
    padding: 1.8rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ $isOpen, theme }) => (!$isOpen ? `0.6rem solid ${theme.colors.GRAY02}` : `none`)};
    & h1 {
      ${({ theme }) => theme.typographies.n_head02_bold}
    }
  `,

  InfoAccordion: styled.section<{ $isOpen: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  border-bottom : ${({ $isOpen, theme }) => ($isOpen ? `0.6rem solid ${theme.colors.GRAY02}` : `none`)}
  }
`,

  InfoContainer: styled.section`
    width: 100%;
    padding: 0 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.8rem;
  `,

  InfoTitle: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;

    & p {
      ${({ theme }) => theme.typographies.n_body02_reg}
    }

    & span {
      background-color: ${({ theme }) => theme.colors.GRAY04};
      width: 0.1rem;
      height: 0.9rem;
    }
  `,

  InfoContent: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.8rem;
  `,

  ShadowLine: styled.span`
    width: 100%;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.GRAY02};
  `,
};
