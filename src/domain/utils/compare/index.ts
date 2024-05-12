/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {hash} from '../hash';

export const compare = (
  first: any,
  second: any,
  onFailCallback?: () => void,
): boolean => {
  if (hash(first) === hash(second)) return true;
  onFailCallback?.call(this);
  return false;
};
