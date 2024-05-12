import styles from './styles';
import Box from '../Box/Box';
import React from 'react';
import { ViewProps } from 'react-native';
import { ColorsPresets } from '~view/constants/theme/colors';

type Props = ViewProps & {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ ...props }) => (
  <Box color={ColorsPresets.Bg5} style={[styles.wrapper, props.style]}>
    {props.children}
  </Box>
);

export default Card;
