import {
	SandpackProvider,
	SandpackLayout,
	SandpackCodeEditor,
	SandpackPreview,
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

const LiveCode = () => (
	<SandpackProvider
		theme={nightOwl}
		template="react"
		options={{
			classes: {
				'sp-wrapper': 'w-[100vw !important]',
				'sp-layout': 'custom-layout',
				'sp-tab-button': 'custom-tab',
			},
		}}
		className="w-[100vw] h-[100vh]"
	>
		<SandpackLayout>
			<SandpackCodeEditor />
			<SandpackPreview />
		</SandpackLayout>
	</SandpackProvider>
);

export default LiveCode;
