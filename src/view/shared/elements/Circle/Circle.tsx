import {
  Circle as SkiaCircle,
  RadialGradient,
  vec,
  Color,
} from '@shopify/react-native-skia';
import {ReactNode, useEffect} from 'react';
import {
  Easing,
  interpolate,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  cx?: number;
  cy?: number;
  r: number;
  step: number;
  index: number;
  duration: number;
  colors: Color[];
};
/**
 * Must be used in Canvas
 * @param {Props} {r, step, index, duration}
 * @returns {*}  {ReactNode}
 */
const Circle = ({
  r,
  step,
  index,
  duration,
  colors,
  ...props
}: Props): ReactNode => {
  const [cx, cy] = [props.cx ?? r * 2, props.cy ?? r * 2];
  const radius = useSharedValue(index * step);

  const opacity = useDerivedValue(() =>
    interpolate(radius.value, [0, r - step / 2], [1, 0]),
  );

  useEffect(() => {
    radius.value = withRepeat(
      withSequence(
        withTiming(step + index * step, {
          duration,
          easing: Easing.linear,
        }),
      ),
      -1,
    );
  }, []);

  return (
    <SkiaCircle r={radius} cx={cx} cy={cy} opacity={opacity}>
      <RadialGradient c={vec(cx, cy)} r={r} colors={colors} />
    </SkiaCircle>
  );
};

Circle.defaultProps = {
  colors: ['#7fdedc', '#e8fa89'],
};

export default Circle;
