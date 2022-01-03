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
						rel='preload'
						href='/assets/fonts/DEVIS/Devis.otf'
						as='font'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/assets/fonts/EB_Garamond/EBGaramond.ttf'
						as='font'
						crossOrigin=''
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
