import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { Screens } from '~domain/constants/screens';
import { PermissionsModule } from '~modules/permissions';
import { ColorsPresets } from '~view/constants/theme/colors';
import Background from '~view/shared/block/Background/Background';
import Button from '~view/shared/typo/Button/Button';
import Text from '~view/shared/typo/Text/Text';
import { MainStackParamList } from '~view/root/RootView/router/types';
import {
  setConfirmPermission,
  setLocationPermission,
} from '~domain/store/slices/app';

const LocationPermissionScreen = (): React.ReactElement => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const dispatch = useDispatch();
  const { bottom } = useSafeAreaInsets();

  const handleSubmit = async () => {
    const response = await PermissionsModule.request(
      PermissionsModule.PERMISSIONS_LOCATION,
    );
    dispatch(setLocationPermission(response));
    dispatch(setConfirmPermission(true));
    handleNavigateToHome();
  };

  const handleNavigateToHome = async () => {
    dispatch(setConfirmPermission(true));
    navigation.replace(Screens.Home);
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.content,
          {
            bottom,
            top: styles.content.top - bottom / 2,
          },
        ]}>
        {/* Pin */}
        <Animated.View entering={FadeIn.delay(300).duration(600)}>
          <Image
            source={require('~assets/images/helper/location.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View entering={FadeIn.delay(600).duration(600)}>
          <Text type="b5" color={ColorsPresets.White}>
            Enable Location Access
          </Text>
          <Text type="b13" color={ColorsPresets.White}>
            To ensure a seamless and efficient experience, allow us access to
            your location.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeIn.delay(900).duration(600)}
          style={styles.buttons}>
          <Button
            onPress={handleSubmit}
            text="Allow Location Access"
            textOptions={{ color: ColorsPresets.White, type: 'b7' }}
          />
          <Button
            onPress={handleNavigateToHome}
            text="Maybe later"
            type="outline"
            textOptions={{ color: ColorsPresets.Gray2, type: 'b9' }}
          />
        </Animated.View>
      </View>

      <Background />
    </View>
  );
};

export default LocationPermissionScreen;
