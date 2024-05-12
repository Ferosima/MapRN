import styles from './styles';
import Car from './components/Car/Car';
import Road from './components/Road/Road';
import StartLine from './components/StartLine/StartLine';
import { useConfirmationAnimation } from './hooks/useConfirmationAnimation';
import React from 'react';
import Animated from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { ColorsPresets } from '~view/constants/theme/colors';
import Text from '~view/shared/typo/Text/Text';
import { setConfirm } from '~domain/store/slices/way';

type Props = {
  show: boolean;
};

const Confirmation = ({ show }: Props): React.ReactElement | null => {
  const style = useConfirmationAnimation(show);
  const dispatch = useDispatch();

  const handleConfirmation = () => {
    dispatch(setConfirm(true));
  };

  return (
    <Animated.View style={[styles.wrapper, style]}>
      <Road />
      <StartLine />

      <Text type="b8" color={ColorsPresets.White}>
        Swipe to start
      </Text>

      <Car onConfirm={handleConfirmation} show={show} />
    </Animated.View>
  );
};

export default Confirmation;
