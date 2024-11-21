import styled from '@emotion/styled';

import Button from '@/components/seatReservation/Button';

import SvgIcPaymentComplete from '@/assets/svg/IcPaymentComplete';

interface ModalProps {
  handleCloseModal: () => void;
}

const ModalContents = ({ handleCloseModal }: ModalProps) => {
  return (
    <S.ModalStyle>
      <S.IcStyle>
        <SvgIcPaymentComplete width="12rem" height="12rem" />
      </S.IcStyle>
      <S.CompleteComment>예매가 완료되었어요!</S.CompleteComment>
      <S.SmallComment>모웹2조 합동세미나 수고했어요! 앱잼도 파이팅~</S.SmallComment>
      <S.ButtonWrapper>
        <Button onClick={handleCloseModal}>처음으로</Button>
      </S.ButtonWrapper>
    </S.ModalStyle>
  );
};

export default ModalContents;

const S = {
  ModalStyle: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 26.4rem;
    height: 27.6rem;
  `,
  IcStyle: styled.div`
    justify-content: center;
    align-self: center;
    margin-top: 1.6rem;
    margin-bottom: 0.4rem;
  `,
  CompleteComment: styled.p`
    justify-content: center;
    align-self: center;
    margin-bottom: 1rem;
    ${({ theme }) => theme.typographies.n_head02_bold}
  `,
  SmallComment: styled.p`
    justify-content: center;
    align-self: center;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.GRAY08};
    ${({ theme }) => theme.typographies.n_body03_reg}
  `,
  ButtonWrapper: styled.div`
    align-self: center;
    width: 100%;
    margin-bottom: 2.4rem;
    padding: 0rem 5.3rem;
  `,
};
