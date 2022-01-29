import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {Main} from './pages/Main';

const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="HelloWorld"
			component={Main}
			durationInFrames={6000}
			fps={60}
			width={1920}
			height={1080}
			defaultProps={{}}
		/>
	);
};

registerRoot(RemotionVideo);
