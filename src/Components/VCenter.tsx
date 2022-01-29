import React, { ReactNode } from 'react';

interface IVCenter {
  children: ReactNode
}

export const VCenter: React.FC<IVCenter> = ({ children }) => {

	return (
		<div
      style={{
        height: '100%',
        display: "flex",
        alignItems: 'center'
      }}
    > 
      { children }
    </div>
	);
};
