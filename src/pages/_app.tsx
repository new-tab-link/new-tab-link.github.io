'use client'
import { Container, createTheme, CssBaseline, NoSsr, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { Fragment } from "react";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: 'light',
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
      <NoSsr>

        <ThemeProvider theme={theme}>
          <Container id={"mui-root-container"} maxWidth="lg"  fixed>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </NoSsr>
    </Fragment>
  );
}
export default MyApp;
