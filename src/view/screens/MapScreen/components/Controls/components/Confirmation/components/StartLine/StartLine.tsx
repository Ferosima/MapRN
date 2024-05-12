import styles from './styles';
import { Image, View } from 'react-native';
import React from 'react';

const StartLine = (): React.ReactNode => (
  <View style={styles.wrapper}>
    <Image
      source={require('assets/images/helper/start.png')}
      style={{
        height: 50,
        resizeMode: 'contain',
        width: 10,
      }}
    />
  </View>
);

export default StartLine;
