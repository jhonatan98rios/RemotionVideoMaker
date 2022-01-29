import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface IText {
  value: string,
  customStyle?: object
}


const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Text = styled.p`
  position: relative;

  ::after {
    content: '';
    display: 'block';
    width: 2px;
    bottom: 2px;
    height: 14px;
    background-color: black;
    position: absolute;
    animation: ${blink} 1s linear infinite;
  }
`


export const TypeWriter: React.FC<IText> = ({ value, customStyle }) => {

  const textRef = useRef(null)
  const count = useRef(0)
  const speed = 60;

  function typeWriter() {
    if (count.current < value.length) {
      if(textRef?.current){
        textRef.current.innerHTML += value.charAt(count.current);
      }
      count.current++;
      setTimeout(typeWriter, speed);
    }
  }

  useEffect(() => {
    typeWriter()
  }, [])

	return (
		<Text
      ref={textRef}
      style={{
        fontFamily: 'SF Pro Text, Helvetica, Arial',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        color: 'white',
        ...customStyle
      }}
    />
	);
};


