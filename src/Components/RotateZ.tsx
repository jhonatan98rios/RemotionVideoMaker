import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

interface IRotateZ {
  customStyle?: object,
  delay?: number
  duration?: number,
}


export const RotateZ: React.FC<IRotateZ> = ({ children, delay=30, duration=150, customStyle }) => {

  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const animation = interpolate(
    frame,
    [0, delay, delay + duration, durationInFrames],
    [0, 0, 360, 360]
  );
  
	return (
    <div 
      style={{
        transform: `rotateZ(${animation}deg)`,
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


