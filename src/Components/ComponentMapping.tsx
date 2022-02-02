import React from 'react';
import { TranslateXFromLeftToRight } from '../Partials/TranslateXFromLeftToRight'
import { TranslateXFromRightToLeft } from '../Partials/TranslateXFromRightToLeft'
import { TypeWriterPartial } from '../Partials/TypeWriter';
import { SplittedTextPartial } from '../Partials/SplittedText';

interface IComponentMapping {
  type: string,
  text: string,
  customStyle: object
}

export const ComponentMapping: React.FC <IComponentMapping> = ({ type, text, customStyle }) => {

  const components = {
    translate_x_from_right_to_left: () => (
      <TranslateXFromRightToLeft 
        text={text}
        customStyle={customStyle}
      />
    ),

    translate_x_from_left_to_right: () => (
      <TranslateXFromLeftToRight 
        text={text} 
        customStyle={customStyle}
      />
    ),

    typewriter: () => (
      <TypeWriterPartial 
        text={text} 
        customStyle={customStyle}
      />
    ),

    splitted_text: () => (
      <SplittedTextPartial 
        text={text} 
        customStyle={customStyle}
      />
    ),
   
  }

	return components[type]()
};
