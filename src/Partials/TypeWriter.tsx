import React from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import { HCenter } from '../Components/HCenter';
import { VCenter } from '../Components/VCenter';
import { TypeWriter } from '../Components/TypeWriter';


interface I {
  text: string,
  customStyle:object,
}

export const TypeWriterPartial: React.FC<I> = ({ text, customStyle }) => {
  
  const videoConfig = useVideoConfig();
  const transitionStart = 0;

  return (
    <Sequence from={transitionStart}>
      <HCenter>
        <VCenter>
          <TypeWriter
            value={text}
            customStyle={customStyle}
          />
        </VCenter>
      </HCenter>
    </Sequence>
  );
};
