import { useConfirmationCar } from './hooks/useConfirmationCar';
import styles from './styles';
import { View } from 'react-native';
import React from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

type Props = { show: boolean; onConfirm: () => void };

const Car = ({ show, onConfirm }: Props): React.ReactElement => {
  const [carPan, carImage, isGestureBlocked, carStyle] = useConfirmationCar(
    show,
    onConfirm,
  );

  return (
    <>
      {/* Car */}
      <GestureDetector gesture={carPan}>
        <Animated.Image style={[styles.car, carStyle]} source={carImage} />
      </GestureDetector>

      {/* Blocking gesture */}
      <View style={[styles.gestureCover, isGestureBlocked && styles.block]} />
    </>
  );
};

export default Car;
