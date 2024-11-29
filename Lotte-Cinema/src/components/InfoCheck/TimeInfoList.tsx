import styled from '@emotion/styled';

import { TimeListType } from '@/types/infoCheck';

interface TimeInfoListProps {
  allTimeList: TimeListType[];
  selectedTime: string;
}

const TimeInfoList = ({ allTimeList, selectedTime }: TimeInfoListProps) => {
  return (
    <S.Wrapper>
      {allTimeList.map(({ beginTime }, idx) => {
        const isActive = beginTime === selectedTime;

        return (
          <S.TimeInfo key={idx} $isActive={isActive}>
            <S.Time>{beginTime}</S.Time>
            <S.Seat $isActive={isActive}>
              <span>70</span> / 75
            </S.Seat>
          </S.TimeInfo>
        );
      })}
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 2.4rem 1rem 2rem 1rem;
    overflow: auto;

    & > * {
      flex-shrink: 0;
    }
  `,

  TimeInfo: styled.div<{ $isActive: boolean }>`
    width: 6.4rem;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    border-radius: 0.4rem;

    outline: 1px solid ${({ theme, $isActive }) => ($isActive ? 'none' : theme.colors.GRAY04)};
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.RED02 : theme.colors.WHITE100)};
    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.WHITE100 : theme.colors.BLACK100)};
  `,
  Time: styled.p`
    ${({ theme }) => theme.typographies.r_body01}
  `,
  Seat: styled.p<{ $isActive: boolean }>`
    ${({ theme }) => theme.typographies.r_caption}

    & > span {
      color: ${({ theme, $isActive }) => ($isActive ? theme.colors.WHITE100 : theme.colors.GREEN)};
    }
  `,
};
export default TimeInfoList;
