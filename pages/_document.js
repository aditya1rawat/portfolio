import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preload'
						href='/fonts/Devis/Devis.otf'
						as='font'
						crossOrigin
					/>
					<link
						rel='preload'
						href='/fonts/EB_Garamond/EBGaramond-Regular.ttf'
						as='font'
						crossOrigin
					/>
					{/* <link
						rel='preload'
						href='/fonts/EB_Garamond/EBGaramond-Bold.ttf'
						as='font'
						crossOrigin
					/>
					<link
						rel='preload'
						href='/fonts/EB_Garamond/EBGaramond-ExtraBold.ttf'
						as='font'
						crossOrigin
					/> */}
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
