import i18next from "i18next";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    const dir = i18next.dir(this.props.locale)
    const lng = this.props.locale
    return (
      <Html lang={lng} dir={'dir'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
