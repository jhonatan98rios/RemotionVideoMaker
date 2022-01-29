import React from 'react';

interface IText {
  value: string
}

export const Text: React.FC<IText> = ({ value }) => {

	return (
		<h2
      style={{
        fontFamily: 'SF Pro Text, Helvetica, Arial',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        color: 'white'
      }}
    > 
      { value }
    </h2>
	);
};
