import styled from '@emotion/styled';

import { useState } from 'react';

import { THEATER_DETAIL_REGION, THEATER_REGION } from '@/constants/mocks/theaterRegion';

import { IcCheckRed20 } from '@/assets/svg';

import theme from '@/styles';

interface ListProps {
  onClick: (name: string) => void;
  selectedDetail: string[];
}

const List = ({ onClick, selectedDetail }: ListProps) => {
  const [selectedRegion, setSelectedRegion] = useState(0); // idx로 판단

  const handleClickRegion = (idx: number) => {
    setSelectedRegion(idx);
  };

  return (
    <S.Wrapper>
      <S.RegionContainer>
        {THEATER_REGION.map(({ name, theaterCount }, idx) => {
          const isActive = idx === selectedRegion;
          return (
            <S.Region $isActive={isActive} onClick={() => handleClickRegion(idx)} key={idx}>
              <S.RegionText $isActive={isActive}>{name}</S.RegionText>
              <S.RegionNum>{theaterCount}</S.RegionNum>
            </S.Region>
          );
        })}
      </S.RegionContainer>

      <S.DetailRegionContainer>
        {THEATER_DETAIL_REGION.map(({ id, name }) => {
          const isActive = selectedDetail.includes(name);
          return (
            <S.DetailRegion $isActive={isActive} onClick={() => onClick(name)} key={id}>
              {name}
              {isActive && <IcCheckRed20 width={'2rem'} />}
            </S.DetailRegion>
          );
        })}
      </S.DetailRegionContainer>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.GRAY04};
    width: 100%;
    height: calc(100dvh - 92px); // 화면 전체 높이 - (header + TabBar 높이)
  `,

  RegionContainer: styled.ul`
    width: 40%;
  `,

  DetailRegionContainer: styled.ul`
    width: 60%;
    overflow-y: scroll;
    background-color: white;
    /* margin-top: 0.2rem; > 디자이너 질문 */
    padding-bottom: 20rem;
  `,

  Region: styled.li<{ $isActive: boolean }>`
    width: 100%;
    padding: 1.3rem 1.8rem 1.7rem 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY05};
    background-color: ${({ $isActive }) => ($isActive ? theme.colors.WHITE100 : theme.colors.GRAY04)};
    cursor: pointer;
  `,

  RegionText: styled.p<{ $isActive: boolean }>`
    ${({ theme }) => theme.typographies.n_body01_reg}
    color: 	${({ theme }) => theme.colors.GRAY08};
    white-space: nowrap;
  `,

  RegionNum: styled.p`
    ${({ theme }) => theme.typographies.n_body02_reg}
    color: 	${({ theme }) => theme.colors.GRAY08};
  `,

  DetailRegion: styled.li<{ $isActive: boolean }>`
    width: 100%;
    height: 4.4rem;
    padding: 1.4rem 1.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme, $isActive }) => ($isActive ? theme.typographies.n_body01_bold : theme.typographies.n_body01_reg)}
    color: 	${({ theme, $isActive }) => ($isActive ? theme.colors.RED02 : theme.colors.BLACK100)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY03};
    white-space: nowrap;
    cursor: pointer;
  `,
};

export default List;
