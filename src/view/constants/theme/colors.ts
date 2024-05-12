export const MainYellowColor = '#F5E14B';
export const MainGreenColor = '#2CB85B';

export const Colors: Record<ColorsPresets, string> = {
  bg1: '#F7F7F7',

  bg2: '#F3F2F7',
  bg3: '#FFFFFF',

  bg4: 'rgba(68,69,70,0.85)',
  bg5: 'rgba(68,69,70,0.7)',

  black: '#1d1d1d',
  blue: '#688EE0',
  blueGray: '#D1D4DA',

  danger: '#FE3360',
  danger10: '#FE336010',

  gray1: '#8E8E93',
  gray2: '#B6B6BB',
  gray3: '#F1F1F1',
  gray4: '#C8CBCA',

  gray5: '#F3F5F7',
  grayLine: '#82B9B350',
  green: '#25C35A',
  greenGray: '#82B9B3',

  mainGreen: MainGreenColor,
  mainYellow: MainYellowColor,

  secondary: '#622861',
  success: '#14C747',
  successLight: '#E8FAED',

  transparent: 'transparent',

  white: '#FFFFFF',
};

export enum ColorsPresets {
  MainGreen = 'mainGreen',
  MainYellow = 'mainYellow',

  Secondary = 'secondary',

  Black = 'black',
  White = 'white',

  GrayLine = 'grayLine',
  Gray1 = 'gray1',
  Gray2 = 'gray2',
  Gray3 = 'gray3',
  Gray4 = 'gray4',
  Gray5 = 'gray5',

  BlueGray = 'blueGray',
  GreenGray = 'greenGray',
  Bg1 = 'bg1',
  Bg2 = 'bg2',
  Bg3 = 'bg3',
  Bg4 = 'bg4',
  Bg5 = 'bg5',

  Danger = 'danger',
  Danger10 = 'danger10',
  Success = 'success',
  Blue = 'blue',
  Green = 'green',

  SuccessLight = 'successLight',

  Transparent = 'transparent',
}
