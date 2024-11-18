import { css } from '@emotion/react';

// Font 정의
// Noto Sans KR (font)
const notoFont = css`
  font-family: 'Noto Sans KR', sans-serif;
`;

// Roboto (font)
const robotoFont = css`
  font-family: 'Roboto', sans-serif;
`;

// Noto Sans KR (head)
const notoHead = {
  n_head01: css`
    ${notoFont};
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1px;
  `,
  n_head02_reg: css`
    ${notoFont};
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;
  `,
  n_head02_bold: css`
    ${notoFont};
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.5px;
  `,
  n_head03_reg: css`
    ${notoFont};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1px;
  `,
  n_head03_med: css`
    ${notoFont};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -1px;
  `,
  n_head03_bold: css`
    ${notoFont};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -1px;
  `,
  n_head04: css`
    ${notoFont};
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;
  `,
};

// Noto Sans KR (body)
const notoBody = {
  n_body01_reg: css`
    ${notoFont};
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -1px;
  `,
  n_body01_bold: css`
    ${notoFont};
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -1px;
  `,
  n_body02_reg: css`
    ${notoFont};
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -1px;
  `,
  n_body02_med: css`
    ${notoFont};
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.5px;
  `,
  n_body02_bold: css`
    ${notoFont};
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.5px;
  `,
  n_body02_underline: css`
    ${notoFont};
    font-size: 13px;
    font-weight: 900;
    line-height: 18px;
    letter-spacing: -1px;
    text-decoration: underline;
  `,
  n_body03_reg: css`
    ${notoFont};
    font-size: 11px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.5px;
  `,
  n_body03_med: css`
    ${notoFont};
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.5px;
  `,
  n_body03_bold: css`
    ${notoFont};
    font-size: 11px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: -0.5px;
  `,
};

// Noto Sans KR (caption)
const notoCaption = {
  n_caption01_reg: css`
    ${notoFont};
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.5px;
  `,
  n_caption01_bold: css`
    ${notoFont};
    font-size: 10px;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: -1px;
  `,
  n_caption02_reg: css`
    ${notoFont};
    font-size: 9px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.5px;
  `,
  n_caption02_med: css`
    ${notoFont};
    font-size: 9px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -0.6px;
  `,
};

// Roboto (head)
const robotoHead = {
  r_number: css`
    ${robotoFont};
    font-size: 30px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -1px;
  `,
  r_head01: css`
    ${robotoFont};
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.6px;
  `,
};

// Roboto (body)
const robotoBody = {
  r_body01: css`
    ${robotoFont};
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.6px;
  `,
  r_body02_bold: css`
    ${robotoFont};
    font-size: 13px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: -0.6px;
  `,
  r_body03_reg: css`
    ${robotoFont};
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.6px;
  `,
  r_body03_bold: css`
    ${robotoFont};
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.6px;
  `,
};

// Roboto (caption)
const robotoCaption = {
  r_caption: css`
    ${robotoFont};
    font-size: 9px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0px;
  `,
};

export const typographies = {
  ...notoHead,
  ...notoBody,
  ...notoCaption,
  ...robotoHead,
  ...robotoBody,
  ...robotoCaption,
};
