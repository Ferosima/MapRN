import { CAR_WIDTH, END_POSITION } from '../styles';
import { useEffect, useState } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
import { Gesture, PanGesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

enum CarState {
  Stand,
  Forward,
  Back,
}

const carImages: Record<CarState, ImageSourcePropType> = {
  0: require('assets/images/helper/car/car_0.png'),
  1: require('assets/images/helper/car/car_1.png'),
  2: require('assets/images/helper/car/car_2.png'),
};

export const useConfirmationCar = (
  show: boolean,
  onConfirm: () => void,
): [PanGesture, ImageSourcePropType, boolean, StyleProp<ImageStyle>] => {
  const position = useSharedValue(0);

  const [carState, setCarState] = useState<CarState>(0);
  const [isGestureBlocked, setGestureBlocked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  const carPan = Gesture.Pan()
    .onUpdate(e => {
      if (e.translationX < position.value) {
        runOnJS(setCarState)(CarState.Back);
      } else {
        runOnJS(setCarState)(CarState.Forward);
      }
      position.value = e.translationX;
    })
    .onEnd(e => {
      // Block gesture to prevent twitching of car
      runOnJS(setGestureBlocked)(true);

      const stoppingPath = e.velocityX / 20;

      if (position.value + stoppingPath > END_POSITION) {
        position.value = withSequence(
          withTiming(
            END_POSITION + CAR_WIDTH,
            {
              duration: e.velocityX > 50 ? e.velocityX : 1000,
            },
            // Run onConfirm after animation
            () => {
              runOnJS(onConfirm)();
            },
          ),
        );
      } else {
        runOnJS(setCarState)(CarState.Back);

        position.value = withSequence(
          // Braking animation
          withTiming(position.value + stoppingPath, {
            duration: Math.abs(stoppingPath * 15),
            easing: Easing.out(Easing.poly(4)),
          }),
          // Go back animation
          withDelay(
            100,
            withTiming(
              0,
              {
                duration: Math.abs(position.value * 15),
                easing: Easing.inOut(Easing.quad),
              },
              () => {
                runOnJS(setCarState)(CarState.Stand);
                runOnJS(setGestureBlocked)(false);
              },
            ),
          ),
        );
      }
    });

  useEffect(() => {
    if (!show) position.value = 0;
  }, [show]);

  return [carPan, carImages[carState], isGestureBlocked, animatedStyle];
};
