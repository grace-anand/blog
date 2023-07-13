import {
	SandpackProvider,
	SandpackLayout,
	SandpackCodeEditor,
	SandpackPreview,
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import styles from './LiveCode.module.css';

const LiveCode = () => (
	<SandpackProvider
		theme={nightOwl}
		template="react"
		options={{
			classes: {
				'sp-wrapper': styles['sp-wrapper'] || '',
				'sp-layout': styles['sp-layout'] || '',
				'sp-tab-button': styles['sp-tab-button'] || '',
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
