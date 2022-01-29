import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

interface IScale {
  customStyle?: object,
  animationType: 'scaleUP' | 'scaleDown'
  delay?: number
  duration?: number,
}


export const Scale: React.FC<IScale> = ({ children, delay=30, duration=30, animationType, customStyle }) => {

  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const animation = interpolate(
    frame,
    [0, delay, delay + duration, durationInFrames],
    (animationType == 'scaleUP' ? [0, 0, 1, 1] : [1, 1, 0, 0])
  );
  
	return (
    <div 
      style={{
        transform: `scale(${animation})`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        ...customStyle
      }}
    >
      { children }
    </div>
	);
};


