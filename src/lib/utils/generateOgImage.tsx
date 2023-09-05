import satori, { type SatoriOptions } from 'satori';
import { writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

const fetchFonts = async () => {
	// Regular Font
	const fontFileRegular = await fetch(
		'https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf'
	);
	const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

	// Bold Font
	const fontFileBold = await fetch(
		'https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf'
	);
	const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

	return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const ogImage = (text: string) => {
	return (
		<div
			style={{
				background: '#181818',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '-1px',
					right: '-1px',
					border: '4px solid #fff',
					background: '#181818',
					opacity: '0.9',
					borderRadius: '4px',
					display: 'flex',
					justifyContent: 'center',
					margin: '2.5rem',
					width: '88%',
					height: '80%',
				}}
			/>

			<div
				style={{
					border: '4px solid #fff',
					background: '#181818',
					borderRadius: '4px',
					display: 'flex',
					justifyContent: 'center',
					margin: '2rem',
					width: '88%',
					height: '80%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						margin: '20px',
						width: '90%',
						height: '90%',
					}}
				>
					<p
						style={{
							fontSize: 72,
							fontWeight: 'bold',
							maxHeight: '84%',
							overflow: 'hidden',
						}}
					>
						{text}
					</p>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							marginBottom: '8px',
							fontSize: 28,
						}}
					>
						<span>
							by{' '}
							<span
								style={{
									color: 'transparent',
								}}
							>
								"
							</span>
							<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>Anand</span>
						</span>
						<img
							src="https://i.ibb.co/NZdTTsL/bnw-logo.png"
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const options: SatoriOptions = {
	width: 1200,
	height: 630,
	embedFont: true,
	fonts: [
		{
			name: 'IBM Plex Mono',
			data: fontRegular,
			weight: 400,
			style: 'normal',
		},
		{
			name: 'IBM Plex Mono',
			data: fontBold,
			weight: 600,
			style: 'normal',
		},
	],
};

const generateOgImage = async (mytext = 'my textt') => {
	const svg = await satori(ogImage(mytext), options);

	// render png in production mode
	if (import.meta.env.MODE === 'production') {
		const resvg = new Resvg(svg);
		const pngData = resvg.render();
		const pngBuffer = pngData.asPng();

		console.info('Output PNG Image  :', `${mytext}.png`);

		await writeFile(`./dist/${mytext}.png`, pngBuffer);
	}

	return svg;
};

export default generateOgImage;
