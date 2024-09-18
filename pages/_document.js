import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    console.log(`initail props initialProps`, initialProps)
    console.log(`initail props ctx`, ctx)
    return { ...initialProps, lang: ctx.query.lng };
  }
  
  render() {
    console.log(`my document`, this.props.lang );
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
