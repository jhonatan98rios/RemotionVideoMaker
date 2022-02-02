import React from 'react';
import {registerRoot, Composition} from 'remotion';

import { Router } from './router'

const RemotionVideo: React.FC = () => {

	const duration = 60 * 60 * 1
								/* fps  sec  min  hour  */

	return (
		<Composition
			id="HelloWorld"
			component={Router}
			durationInFrames={duration}
			fps={60}
			width={1920}
			height={1080}
			defaultProps={{}}
		/>
	);
};

registerRoot(RemotionVideo);