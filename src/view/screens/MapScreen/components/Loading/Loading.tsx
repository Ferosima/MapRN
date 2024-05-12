import styles from './styles';
import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import Background from '~view/shared/block/Background/Background';
import Loader from '~view/shared/elements/Loader/Loader';
import Text from '~view/shared/typo/Text/Text';
import { ColorsPresets } from '~view/constants/theme/colors';
import Button from '~view/shared/typo/Button/Button';
import { STYLES } from '~view/constants/theme/defaultStyles';
import { useAppSelector } from '~domain/hooks/useStore';
import { setConfirm } from '~domain/store/slices/way';

const Loading = (): React.ReactElement | null => {
  const wayState = useAppSelector(state => state.way);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setConfirm(false));
  };

  if (!wayState.confirmed) return null;

  return (
    <Animated.View style={styles.wrapper} entering={FadeIn} exiting={FadeOut}>
      <Background
        style={styles.background}
        colors={['#81B5AE60', '#81B5AE80', '#81B5AE05']}
      />

      <View
        style={[
          styles.content,
          { bottom: insets.bottom, marginTop: -insets.bottom / 2 },
        ]}>
        <View style={STYLES.ALIGN_CENTER}>
          <Loader style={styles.loader} />
          <Text type="b7" color={ColorsPresets.White}>
            We are looking for the best option for you
          </Text>
        </View>

        <Button
          type="outline"
          text="Cancel"
          textOptions={{ color: ColorsPresets.Danger, type: 'b8' }}
          onPress={handleCancel}
        />
      </View>
    </Animated.View>
  );
};

export default Loading;
