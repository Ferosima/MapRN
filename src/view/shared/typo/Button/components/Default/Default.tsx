import styles from './styles';
import { TButtonProps } from '../../Button';
import {
  BlurMask,
  Canvas,
  LinearGradient,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import React, { useState } from 'react';
import { LayoutChangeEvent, TouchableOpacity, ViewProps } from 'react-native';
import { ColorsPresets } from '~view/constants/theme/colors';
import { FONT_FAMILY } from '~view/constants/theme/defaultStyles';
import Text, { TextProps } from '~view/shared/typo/Text/Text';

export interface DefaultButtonProps extends TButtonProps, ViewProps {
  type: 'default';
  height: number;
  blur: number;
  onPress?: () => void;
  text: string;
  textOptions?: Partial<TextProps>;
}

const DefaultButton = ({
  text,
  textOptions,
  onPress,
  style,
  blur,
  height,
  ...props
}: DefaultButtonProps): React.ReactElement => {
  const wrapperHeight = height + blur * 4;
  const [width, setWidth] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width - blur * 4);
  };

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.wrapper,
        { height: wrapperHeight, marginHorizontal: -blur * 2 },
        style,
      ]}
      onLayout={onLayout}
      onPress={onPress}>
      <Text
        color={ColorsPresets.Black}
        type="b4"
        font={FONT_FAMILY.BOLD}
        {...textOptions}>
        {text}
      </Text>
      <Canvas style={[styles.canvas, { height: wrapperHeight }]}>
        <RoundedRect
          x={blur * 2}
          y={blur * 2}
          width={width}
          height={height}
          r={20}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={['#4F938B', '#F5E14B']}
          />
          <BlurMask blur={blur} style="solid" />
        </RoundedRect>
      </Canvas>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  blur: 5,
  height: 46,
  type: 'default',
};

export default DefaultButton;
