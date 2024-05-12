import Column from '../Column/Column';
import React from 'react';
import { ViewProps } from 'react-native';
import { Colors, ColorsPresets } from '~view/constants/theme/colors';

export type BoxProps = ViewProps & {
  color?: ColorsPresets;
};

const Box: React.FunctionComponent<BoxProps> = props => {
  const preset = Colors[props.color as ColorsPresets];

  return (
    <Column {...props} style={[props.style, { backgroundColor: preset }]}>
      {props.children}
    </Column>
  );
};

Box.defaultProps = {
  color: ColorsPresets.Transparent,
};

export default Box;
