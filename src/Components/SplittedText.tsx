import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

interface ISplittedText {
	customStyle?: object,
	titleText: string
	duration: number
}

export const SplittedText: React.FC<ISplittedText> = ({titleText, duration, customStyle}) => {

	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);

	const scaleAnimation = (i: number) => spring({
		fps: videoConfig.fps,
		frame: frame - i * duration,
		config: {
			damping: 100,
			stiffness: 200,
			mass: 0.5,
		},
	})

	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				width: '100%',
				...customStyle
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							marginLeft: 10,
							marginRight: 10,
							transform: `scale(${scaleAnimation(i)})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
