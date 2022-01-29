import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

interface ISplittedText {
	titleText: string
	titleColor: string
	bottom: number
	fontSize: number
	duration: number
	textAlign: CanvasTextAlign
}

export const SplittedText: React.FC<ISplittedText> = ({titleText, titleColor, bottom, fontSize, duration, textAlign}) => {

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
				fontSize: fontSize,
				textAlign: textAlign,
				position: 'absolute',
				bottom: bottom,
				width: '100%',
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: titleColor,
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
