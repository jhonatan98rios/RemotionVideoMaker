import React, { useEffect, useRef } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import styled, { keyframes } from 'styled-components';

interface IText {
  value: string,
  customStyle?: React.CSSProperties
}

interface IAfter {
  width: any
  height: any
  color: any
}


const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Text = styled("p")<{after: IAfter}>`
  position: relative;

  ::after {
    content: '';
    display: 'block';
    width: ${ props => props.after.width / 8 }px;
    bottom: 2px;
    right: -16px;
    height: ${ props => props.after.height }px;
    background-color:${ props => props.after.color };
    position: absolute;
    animation: ${blink} 1s linear infinite;
  }
`


export const TypeWriter: React.FC<IText> = ({ value, customStyle }) => {

  const textRef = useRef(null)
  const count = useRef(0)
  const speed = 60;

  function reset() {
    if(textRef?.current && count.current){
      textRef.current.innerHTML = ''
      count.current = 0
    }
  }

  function typeWriter() {
    if (count.current < value.length) {
      if(textRef?.current){
        textRef.current.innerHTML += value.charAt(count.current);
      }
      count.current++;
      setTimeout(typeWriter, speed);

    } else {
      setTimeout(reset, 2500);
    }
  }

  useEffect(() => {
    reset()
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
      after={{
        width: customStyle?.fontSize ? customStyle?.fontSize : 60,
        height: customStyle?.fontSize ? customStyle?.fontSize : 60,
        color: customStyle?.color ? customStyle?.color : 'white'
      }}
    />
	);
};


