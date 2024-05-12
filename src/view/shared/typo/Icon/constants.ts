import {Icons, IconsId} from '~assets/fonts/Icons/Icons';

export type TIconName = IconsId;

export type TIconNames = {
  [key in TIconName]: TIconName;
};

export const IconNames = Object.keys(Icons).reduce((acc, item) => {
  /** Skip default key */
  if (item === 'default') return acc;

  acc[item] = item;
  return acc;
}, {} as TIconNames) as TIconNames;

/** List of icons that should not change direction in rtl */
export const StaticIcons = [
  IconNames.ApplePay,
  IconNames.ApplePayAlt,
  IconNames.CheckBig,
  IconNames.Cutlery,
  IconNames.Card,
  IconNames.BigMoney,
  IconNames.Money,
];
