import styled from '@emotion/styled';

const TimeCard = () => {
  return (
    <S.Wrapper>
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

const InfoBasicContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  align-items: center;
  border-radius: 0.4rem;
  gap: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.GRAY03};
`;

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 5.4rem;
    margin-bottom: 1rem;
  `,

  TimeInfoItem: styled(InfoBasicContainer)`
    background: ${({ theme }) => theme.colors.GRAY01};

    & .bold_time {
      ${({ theme }) => theme.typographies.r_body01}
    }
    & .thin_time {
      ${({ theme }) => theme.typographies.r_body03_reg}
      color: ${({ theme }) => theme.colors.GRAY08}
    }
  `,

  SeatInfoItem: styled(InfoBasicContainer)`
    border-radius: 0 0 0.4rem 0.4rem;
    ${({ theme }) => theme.typographies.r_body03_bold}
    background: ${({ theme }) => theme.colors.GRAY03};

    & .filled_seat {
      color: ${({ theme }) => theme.colors.GREEN};
    }

    & .total_seat {
      color: ${({ theme }) => theme.colors.GRAY08};
    }
  `,
};
