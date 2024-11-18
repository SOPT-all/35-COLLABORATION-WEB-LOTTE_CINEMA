const gray = {
  GRAY01: '#F8F8F8',
  GRAY02: '#F5F5F5',
  GRAY03: '#EBEBEB',
  GRAY04: '#DDDDDD',
  GRAY05: '#D0D0D0',
  GRAY06: '#C2C2C2',
  GRAY07: '#AEAEAE',
  GRAY08: '#999999',
  GRAY09: '#848484',
  GRAY10: '#6D6D6D',
  GRAY11: '#4B4B4B',
  GRAY12: '#444444',
  GRAY13: '#2F2F2F',
  GRAY14: '#151515',
};

// 불투명도 %를 숫자로만 표현 (white, black)
const white = {
  WHITE60: '#FFFFFF99',
  WHITE80: '#FFFFFFCC',
  WHITE100: '#FFFFFF',
};

const black = {
  BLACK20: '#00000033',
  BLACK30: '#0000004D',
  BLACK50: '#00000080',
  BLACK80: '#000000CC',
  BLACK100: '#000000',
};

const blue = {
  BLUE01: '#1EAFFD',
  BLUE02: '#233CA3',
  BLUE03: '#0F577E',
};

const red = {
  RED01: '#FD5A6D',
  RED02: '#FF243E',
  RED03: '#D41017',
};

const sub = {
  YELLOW: '#E9B630',
  GREEN: '#229C56',
  BG_THEATER: '#231F20',
};

// 그라데이션
const linear = {
  LINEAR01: 'linear-gradient(0%, #181818 0%, #181818 100%)',
  LINEAR02: 'linear-gradient(0%, #FFFFFF 0%, #FFFFFFE6 90%)',
};

export const colors = {
  ...gray,
  ...white,
  ...black,
  ...blue,
  ...red,
  ...sub,
  ...linear,
};
