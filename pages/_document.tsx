import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html className="dark">
				<Head />
				<body className="dark:bg-[#121212]">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
