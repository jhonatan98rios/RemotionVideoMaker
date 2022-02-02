import React from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import { HCenter } from '../Components/HCenter';
import { Translate } from '../Components/Translate';
import { Text } from '../Components/Text';


interface I {
  text: string,
  customStyle:object,
}

export const TranslateXFromRightToLeft: React.FC<I> = ({ text, customStyle }) => {
  
  const videoConfig = useVideoConfig();
  const transitionStart = 0;

  return (
    <Sequence from={transitionStart}>
      <HCenter>
        <Translate
          from={-videoConfig.width}
          to={videoConfig.width / 2.6}
          axis={'translateX'}
          customStyle={customStyle}
        >
          <Text value={text} />
        </Translate>
      </HCenter>
    </Sequence>
  );
};
