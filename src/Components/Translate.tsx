import React, { ReactNode } from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

interface ITranslate {
  children: ReactNode
  axis: 'translateX' | 'translateY'
  from: number
  to: number
  customStyle?: object
}

export const Translate: React.FC<ITranslate> = ({children, axis, from, to, customStyle}) => {

	const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  
  const transformAnimation = spring({
    fps: videoConfig.fps,
    frame: frame - 1 * 5,
    from: from,
    to: 0,
    config: {
      damping: 300,
      stiffness: 100,
      mass: 3,
    },
  })

	return (
		<div
      style={{
        ...customStyle,
        transform: `${axis}(${transformAnimation}px)`,
      }}
    >
      { children }
    </div>
	);
};
