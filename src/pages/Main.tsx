import React from 'react';
import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { SplittedText } from '../Components/SplittedText';
import { Translate } from '../Components/Translate';
import { Text } from '../Components/Text';
import { TypeWriter } from '../Components/TypeWriter';
import { HCenter } from '../Components/HCenter';
import { VCenter } from '../Components/VCenter';
import { RotateZ } from '../Components/RotateZ';
import { Scale } from '../Components/Scale';

interface IMain { }

export const Main: React.FC<IMain> = ({ }) => {

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

				<Scale
					animationType={'scaleDown'}
					delay={240}
					duration={60}
				>
					<RotateZ delay={240}>

						<Sequence from={transitionStart + 90}>
							<HCenter>
								<Translate
									from={-videoConfig.width}
									to={videoConfig.width / 2.6}
									axis={'translateX'}
									customStyle={{
										marginTop: 0
									}}
								>
									<Text value={"Olá Mundo!!!"} />
								</Translate>
							</HCenter>
						</Sequence>

						<Sequence from={transitionStart}>
							<HCenter>
								<VCenter>
									<SplittedText
										titleText={'This is a Title'}
										duration={5}
										customStyle={{
											fontSize: 150,
											color: '#FFF',
											textAlign: 'center'
										}}
									/>
								</VCenter>
							</HCenter>
						</Sequence>

						<Sequence from={transitionStart + 30}>
							<HCenter>
								<VCenter>
									<TypeWriter
										value={"This is a subtitle"}
										customStyle={{
											fontSize: 60,
											color: '#A5F',
											textAlign: 'center',
											marginTop: 280
										}}
									/>
								</VCenter>
							</HCenter>
						</Sequence>

						<Sequence from={transitionStart + 90}>
							<HCenter>
								<VCenter>
									<Translate
										from={videoConfig.width * 1.1}
										to={videoConfig.width / 2.6}
										axis={'translateX'}
										customStyle={{
											marginTop: 960
										}}
									>
										<Text value={"Hello World!!"} />
									</Translate>
								</VCenter>
							</HCenter>
						</Sequence>

					</RotateZ>
				</Scale>
			</div>
		</div>
	);
};
