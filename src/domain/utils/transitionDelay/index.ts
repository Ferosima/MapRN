import { TransitionDelay } from '~domain/constants/map';

export const transitionDelay = (
  callback: () => void,
  delay = TransitionDelay,
): void => {
  setTimeout(callback, delay);
};
