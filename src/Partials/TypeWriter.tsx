import React from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import { HCenter } from '../Components/HCenter';
import { Translate } from '../Components/Translate';
import { Text } from '../Components/Text';
import { VCenter } from '../Components/VCenter';
import { TypeWriter } from '../Components/TypeWriter';


interface I {
  text: string,
  customStyle:object,
}

export const TypeWriterPartial: React.FC<I> = ({ text, customStyle }) => {
  
  const videoConfig = useVideoConfig();
  const transitionStart = 10;

  return (
    <Sequence from={transitionStart + 30}>
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
