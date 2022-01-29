import React, { ReactNode } from 'react';

interface IListView {
  items: ReactNode[],
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
}

export const ListView: React.FC<IListView> = ({ items, direction='row' }) => {

	return (
		<div
      style={{
        display: "flex",
        flexDirection: direction
      }}
    > 
    { items && items.map(item => {
        return item
      })
    }
    </div>
	);
};
