import React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Circle, G} from 'react-native-svg';
import {
  CIRCLE_LENGTH,
  height,
  RADIUS,
  STROKE_BACKGROUND_COLOR,
  width,
} from '../../../../shared/constants';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Props {
  animatedProps: any;
}

const CircleProgressBar = ({animatedProps}: Props) => {
  return (
    <Svg style={{position: 'absolute'}}>
      <G rotation="-90" originX={width / 2} originY={height / 2}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={RADIUS}
          stroke={STROKE_BACKGROUND_COLOR}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={RADIUS}
          stroke={'white'}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </G>
    </Svg>
  );
};

export default CircleProgressBar;
