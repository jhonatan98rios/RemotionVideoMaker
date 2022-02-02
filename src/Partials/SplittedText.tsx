import React from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import { HCenter } from '../Components/HCenter';
import { VCenter } from '../Components/VCenter';
import { SplittedText } from '../Components/SplittedText';


interface I {
  text: string,
  customStyle:object,
}

export const SplittedTextPartial: React.FC<I> = ({ text, customStyle }) => {
  
  const videoConfig = useVideoConfig();
  const transitionStart = 0;

  return (
    <Sequence from={transitionStart}>
      <HCenter>
        <VCenter>
          <SplittedText
            titleText={text}
            duration={5}
            customStyle={customStyle}
          />
        </VCenter>
      </HCenter>
    </Sequence>
  );
};
