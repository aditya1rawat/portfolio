import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}
	render() {
		return (
			<Html>
				<Head>
					<link
						// rel='stylesheet preload prefetch'
						rel='preconnect'
						href='/assets/fonts/DEVIS/Devis.otf'
						as='style'
						crossOrigin='anonymous'
					/>

					<link
						// rel='stylesheet preload prefetch'
						rel='preconnect'
						href='/assets/fonts/EB_Garamond/EBGaramond.ttf'
						as='style'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
