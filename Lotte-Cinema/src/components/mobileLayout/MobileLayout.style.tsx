import styled from "@emotion/styled";

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.GRAY03};
  `,
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 360px;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors.WHITE100};

    & > main {
      width: 100%;
    }
  `,
};

export default S;
