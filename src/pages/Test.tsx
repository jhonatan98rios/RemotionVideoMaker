import React from 'react';
import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { ComponentMapping } from '../Components/ComponentMapping';

import data from '../mockdata'

interface ITest { }

export const Test: React.FC<ITest> = ({ }) => {

	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const transitionStart = 10;

	return (
		<div 
			style={{ 
				flex: 1, 
				background: `linear-gradient(
          150deg, 
          #21a3ff, 
          #29b6ef, 
          #30c2e0, 
          #36c9d0, 
          #3ac0b5, 
          #3db099,
          #3fa181,
          #3f916c
        )` 
			}}>
			<div>

				{
					data.map(page => (
						<Sequence from={page.start} durationInFrames={page.duration} >
							{
								page.content.map(p => (
									<ComponentMapping 
										type={p.type} 
										text={p.text}
										customStyle={p.customStyle}
									/>
								))
							}
						</Sequence>
					))
				}
			</div>
		</div>
	);
};

