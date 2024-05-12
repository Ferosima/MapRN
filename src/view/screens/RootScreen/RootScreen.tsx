import styles from './styles';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { MainStackParamList } from '~view/root/RootView/router/types';
import { useAppSelector } from '~domain/hooks/useStore';
import { Screens } from '~domain/constants/screens';
import { PermissionsModule } from '~modules/permissions';
import { setLocationPermission } from '~domain/store/slices/app';

const RootScreen = (): React.ReactElement => {
  const appState = useAppSelector(state => state.app);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const dispatch = useDispatch();

  useEffect(() => {
    handlePreparation();
  }, []);

  const handlePreparation = async () => {
    const response = await PermissionsModule.check(
      PermissionsModule.PERMISSIONS_LOCATION,
    );
    dispatch(setLocationPermission(response));

    if (!appState.confirmPermission) {
      navigation.replace(Screens.LocationPermission);
    } else {
      navigation.replace(Screens.Home);
    }

    SplashScreen.hide();
  };

  return <View style={styles.wrapper} />;
};

export default RootScreen;
