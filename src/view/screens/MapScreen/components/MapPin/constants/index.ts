import { Skia } from '@shopify/react-native-skia';

/**
 * From 0 to 1 - pin drop points
 *
 * From 1 to 2 - pin lifting points
 */
export const animationPoints = [0, 0.3, 0.6, 1, 2];

/** 0 and 2 - the same path for smooth animation */
const pinPaths: [string, string, string, string, string] = [
  /** 0 */ 'M22 0C12.6112 0 5 7.61116 5 17C5 25.4235 11.9598 32.6511 20 34V47.5C20 47.5 19.875 49.5 22 49.5C24.125 49.5 24 47.5 24 47.5V34C32.0402 32.6511 39 25.4235 39 17C39 7.61116 31.3888 0 22 0ZM22 10C18.134 10 15 13.134 15 17C15 20.866 18.134 24 22 24C25.866 24 29 20.866 29 17C29 13.134 25.866 10 22 10Z',
  /** 0.3 */ 'M22 11C12.6112 11 5 18.6112 5 28C5 36.4235 11.9598 43.6511 20 45V74.2586C20 74.2586 19.875 76 22 76C24.125 76 24 74.2586 24 74.2586V45C32.0402 43.6511 39 36.4235 39 28C39 18.6112 31.3888 11 22 11ZM22 21C18.134 21 15 24.134 15 28C15 31.866 18.134 35 22 35C25.866 35 29 31.866 29 28C29 24.134 25.866 21 22 21Z',
  /** 0.6 */ 'M22.1973 27.9997C13.344 27.8684 5.19561 32.5831 4.99986 40.9998C4.81222 49.0675 12.1572 53.6527 20.1974 55.0016V74.0017C20.1974 74.0017 20.0723 75.5017 22.1973 75.5017C24.3223 75.5017 24.1974 74.0017 24.1974 74.0017V55.0016C32.2376 53.6527 39.2003 48.9542 38.9998 40.9995C38.7908 32.7057 30.9052 28.1289 22.1973 27.9997ZM21.8311 36.4995C18.5813 36.4996 15.1383 37.7643 14.8312 40.9995C14.5027 44.4605 18.3546 46.4995 21.8311 46.4995C25.3077 46.4996 29.1597 44.4606 28.8312 40.9995C28.5241 37.7642 25.081 36.4995 21.8311 36.4995Z',
  /** 1 */ 'M22 10C12.6112 10 5 17.6112 5 27C5 35.4235 11.9598 42.6511 20 44V74.5C20 74.5 19.875 76 22 76C24.125 76 24 74.5 24 74.5V44C32.0402 42.6511 39 35.4235 39 27C39 17.6112 31.3888 10 22 10ZM22 22.75C19.6528 22.75 17.75 24.6528 17.75 27C17.75 29.3472 19.6528 31.25 22 31.25C24.3472 31.25 26.25 29.3472 26.25 27C26.25 24.6528 24.3472 22.75 22 22.75Z',
  /** 2 */ 'M22 0C12.6112 0 5 7.61116 5 17C5 25.4235 11.9598 32.6511 20 34V47.5C20 47.5 19.875 49.5 22 49.5C24.125 49.5 24 47.5 24 47.5V34C32.0402 32.6511 39 25.4235 39 17C39 7.61116 31.3888 0 22 0ZM22 10C18.134 10 15 13.134 15 17C15 20.866 18.134 24 22 24C25.866 24 29 20.866 29 17C29 13.134 25.866 10 22 10Z',
];
export const pinPathsSkia = pinPaths.map(
  path => Skia.Path.MakeFromSVGString(path)!,
);

/** 0 and 2 - the same path for smooth animation */
const pinCirclePaths: [string, string, string, string, string] = [
  /** 0 */ 'M15 17C15 13.134 18.134 10 22 10C25.866 10 29 13.134 29 17C29 20.866 25.866 24 22 24C18.134 24 15 20.866 15 17Z',
  /** 0.3 */ 'M15 28C15 24.134 18.134 21 22 21C25.866 21 29 24.134 29 28C29 31.866 25.866 35 22 35C18.134 35 15 31.866 15 28Z',
  /** 0.6 */ 'M14.8312 40.9995C15.1383 37.7643 18.5813 36.4996 21.8311 36.4995C25.081 36.4995 28.5241 37.7642 28.8312 40.9995C29.1597 44.4606 25.3077 46.4996 21.8311 46.4995C18.3546 46.4995 14.5027 44.4605 14.8312 40.9995Z',
  /** 1 */ 'M17.75 27C17.75 24.6528 19.6528 22.75 22 22.75C24.3472 22.75 26.25 24.6528 26.25 27C26.25 29.3472 24.3472 31.25 22 31.25C19.6528 31.25 17.75 29.3472 17.75 27Z',
  /** 2 */ 'M15 17C15 13.134 18.134 10 22 10C25.866 10 29 13.134 29 17C29 20.866 25.866 24 22 24C18.134 24 15 20.866 15 17Z',
];
export const pinCirclePathSkia = pinCirclePaths.map(
  path => Skia.Path.MakeFromSVGString(path)!,
);

const pathShadowPaths: [string, string] = [
  /** 0 */ 'M16 74.5C16 73 19.5301 72 22 72C24.4699 72 28 73 28 74.5C28 76 24.4699 77 22 77C19.5301 77 16 76 16 74.5Z',
  /** 1 */ 'M19 74.5C19 73.6902 20.6901 73 22 73C23.3099 73 25 73.6545 25 74.5C25 75.3455 23.3099 76 22 76C20.6901 76 19 75.3098 19 74.5Z',
];
export const pathShadowPathsSkia = pathShadowPaths.map(
  path => Skia.Path.MakeFromSVGString(path)!,
);