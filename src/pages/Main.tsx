import React from 'react';
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {SplittedText} from '../Components/SplittedText';
import { Translate } from '../Components/Translate';
import { Text } from '../Components/Text';
import { TypeWriter } from '../Components/TypeWriter';
import { HCenter } from '../Components/HCenter';

interface IMain {}

export const Main: React.FC<IMain> = ({}) => {

	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const transitionStart = 10;

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{flex: 1, backgroundColor: '#333'}}>
			<div style={{opacity}}>

				<Sequence from={transitionStart}>
					<SplittedText 
						titleText={'This is a Title'} 
						titleColor={'#0FA'} 
						textAlign={'center'}
						bottom={360}
						fontSize={150}
						duration={5}
					/>
				</Sequence>

				<Sequence from={transitionStart + 30}>
					<SplittedText 
						titleText={"This is a subtitle"} 
						titleColor={'#A5F'} 
						textAlign={'center'}
						bottom={350}
						fontSize={60}
						duration={5}
					/>
				</Sequence>

				<Sequence from={transitionStart + 60}>
					<Translate
						from={-videoConfig.width}
						to={videoConfig.width / 2.6}
						axis={'translateX'}
						customStyle={{
							bottom: 100
						}}
					>
						<Text value={"Eu sou uma batata"} />
					</Translate>
				</Sequence>

				<Sequence from={transitionStart + 120}>
					<HCenter>
						<TypeWriter
							value={"Hello World!!!"}
						/>
					</HCenter>
				</Sequence>
			</div>
		</div>
	);
};
