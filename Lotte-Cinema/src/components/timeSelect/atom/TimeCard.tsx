import styled from '@emotion/styled';

const TimeCard = () => {
  return (
    <S.Wrapper>
      <S.ContainerBottom></S.ContainerBottom>
      <S.TimeInfoItem>
        <span className="bold_time">11:55</span>
        <span className="thin_time">~ 13:17</span>
      </S.TimeInfoItem>
      <S.SeatInfoItem>
        <span className="filled_seat">79</span>
        <span className="total_seat"> / 79</span>
      </S.SeatInfoItem>
    </S.Wrapper>
  );
};

export default TimeCard;

const S = {
  Wrapper: styled.div`
    position: relative;
    width: 11.2rem;
    height: 5.4rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.colors.GRAY03};
    background: ${({ theme }) => theme.colors.GRAY01};
  `,

  ContainerBottom: styled.div`
    position: absolute;
    bottom: 0;
    width: 11.2rem;
    height: 2.2rem;
    background: ${({ theme }) => theme.colors.GRAY03};
  `,

  TimeInfoItem: styled.div`
    position: absolute;
    left: 1.9rem;
    top: 0.5rem;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;

    & .bold_time {
      ${({ theme }) => theme.typographies.r_body01}
    }
    & .thin_time {
      ${({ theme }) => theme.typographies.r_body03_reg}
      color: ${({ theme }) => theme.colors.GRAY08}
    }
  `,

  SeatInfoItem: styled.div`
    position: absolute;
    bottom: 0;
    bottom: 0.3rem;
    left: 4rem;
    ${({ theme }) => theme.typographies.r_body03_bold}

    & .filled_seat {
      color: ${({ theme }) => theme.colors.GREEN};
    }

    & .total_seat {
      color: ${({ theme }) => theme.colors.GRAY08};
    }
  `,
};
