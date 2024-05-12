import styles from './styles';
import StepPath from './components/StepPath/StepPath';
import PointInput from './components/PointInput/PointInput';
import React from 'react';
import { View } from 'react-native';
import { ColorsPresets } from '~view/constants/theme/colors';
import Card from '~view/shared/block/Card/Card';
import Row from '~view/shared/block/Row/Row';
import Line from '~view/shared/elements/Line/Line';
import { WayPointPosition } from '~domain/store/slices/way';

const Destinations = (): React.ReactElement => (
  <Card style={styles.wrapper}>
    <Row>
      <StepPath />

      <View style={styles.content}>
        <PointInput
          position={WayPointPosition.Start}
          placeholder="Where are we going from?"
        />
        <Line color={ColorsPresets.GreenGray} style={styles.line} />
        <PointInput
          position={WayPointPosition.End}
          placeholder="Where we go?"
        />
      </View>
    </Row>
  </Card>
);

export default Destinations;
