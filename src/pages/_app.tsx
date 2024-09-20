
import { pluralMap } from "@0xff336699/js-i18n-lngs";
import { Container } from "@mui/material";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(`33333`, pluralMap)
  return (
    // <ChakraProvider theme={theme}>
    <Container>
      <Component {...pageProps} />
    </Container>
    // </ChakraProvider>
  );
}

export default MyApp;
