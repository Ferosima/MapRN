import styles from './styles';
import AlertBackground from '../AlertBackground/AlertBackground';

import React, { PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { STYLES } from '~view/constants/theme/defaultStyles';

type Props = {
  /**
   * Important modals can't be closed by pressing on backdrop or close icon
   * @type {boolean}
   */
  important?: boolean;
  visible: boolean;
};

const AlertBase = (props: PropsWithChildren<Props>): JSX.Element => (
  <Animated.View style={styles.modal}>
    <View style={[STYLES.CENTER, STYLES.FILL]}>
      <AlertBackground visible={props.visible}>
        <ScrollView>
          <View style={styles.content}>
            <View style={[STYLES.ALIGN_CENTER, STYLES.FILL]}>
              {props.children}
            </View>
          </View>
        </ScrollView>
      </AlertBackground>
    </View>
  </Animated.View>
);

export default AlertBase;
