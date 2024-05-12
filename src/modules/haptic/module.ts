import {IHapticModule} from './types';
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export class HapticModule implements IHapticModule {
  public static trigger = (type: HapticFeedbackTypes): void => {
    ReactNativeHapticFeedback.trigger(type, options);
  };
}
