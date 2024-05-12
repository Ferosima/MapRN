import styles from './styles';
import { Image, View } from 'react-native';
import React from 'react';
import { SIZES } from '~view/constants/theme/defaultStyles';

const Road = (): React.ReactNode => (
  <View style={styles.wrapper}>
    <Image
      source={require('assets/images/helper/road.png')}
      style={{
        resizeMode: 'contain',
        width: SIZES.WINDOW.WIDTH - 16 * 2,
      }}
    />
  </View>
);

export default Road;
