import React, { ReactNode } from 'react';

interface IHCenter {
  children: ReactNode
}

export const HCenter: React.FC<IHCenter> = ({ children }) => {

	return (
		<div
      style={{
        width: '100%',
        display: "flex",
        justifyContent: 'center'
      }}
    > 
      { children }
    </div>
	);
};
