import React, { ReactNode } from 'react';

interface IAbsolute {
  children: ReactNode
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export const Absolute: React.FC<IAbsolute> = ({ children, top=0, right=0, bottom=0, left=0 }) => {
''
	return (
		<div
      style={{
        position: "absolute",
        top,
        right,
        bottom,
        left
      }}
    > 
      { children }
    </div>
	);
};
