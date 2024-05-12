import BackControl from './components/BackControl/BackControl';
import Confirmation from './components/Confirmation/Confirmation';
import Destinations from './components/Destinations/Destinations';
import { useControlsAnimationStyles } from './hooks/useControlsAnimationStyles';
import GeolocationControl from './components/GeolocationControl/GeolocationControl';
import Animated from 'react-native-reanimated';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useAppSelector } from '~domain/hooks/useStore';
import { STYLES } from '~view/constants/theme/defaultStyles';

const MapControls = (): React.ReactElement => {
  const wayState = useAppSelector(state => state.way);
  const showConfirm = Boolean(
    wayState.points.end && wayState.points.start && !wayState.confirmed,
  );
  const styles = useControlsAnimationStyles(showConfirm);

  return (
    <KeyboardAvoidingView
      style={STYLES.FILL}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      pointerEvents="box-none">
      <>
        <View pointerEvents="box-none" style={styles.wrapper}>
          <BackControl />

          <Animated.View pointerEvents="box-none" style={styles.bottom}>
            <GeolocationControl style={styles.button} />
            <Destinations />
            <Confirmation show={showConfirm} />
          </Animated.View>
        </View>
      </>
    </KeyboardAvoidingView>
  );
};

export default MapControls;
