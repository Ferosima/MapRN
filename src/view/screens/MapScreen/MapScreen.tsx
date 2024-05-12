import MapControls from './components/Controls/Controls';
import Map from './components/Map/Map';
import styles from './styles';
import MapPin from './components/MapPin/MapPin';
import Loading from './components/Loading/Loading';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { STYLES } from '~view/constants/theme/defaultStyles';

const MapScreen = (): React.ReactNode => (
  <TouchableWithoutFeedback
    style={styles.wrapper}
    onPress={Keyboard.dismiss}
    accessible={false}>
    <View style={STYLES.FILL} pointerEvents="box-none">
      <Map />
      <MapPin />
      <MapControls />
      <Loading />
    </View>
  </TouchableWithoutFeedback>
);

export default MapScreen;
