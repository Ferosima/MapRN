import { MainStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '~domain/constants/screens';
import LocationPermissionScreen from '~view/screens/LocationPermissionScreen/LocationPermissionScreen';
import MapScreen from '~view/screens/MapScreen/MapScreen';
import RootScreen from '~view/screens/RootScreen/RootScreen';

const Root = createNativeStackNavigator<MainStackParamList>();

export const RouterNavigation = (): JSX.Element => (
  <NavigationContainer>
    <Root.Navigator
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}>
      <Root.Screen name={Screens.Root} component={RootScreen} />

      <Root.Screen
        name={Screens.LocationPermission}
        component={LocationPermissionScreen}
      />
      <Root.Screen name={Screens.Home} component={MapScreen} />
    </Root.Navigator>
  </NavigationContainer>
);
