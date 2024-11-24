'use client'
import '../../globals.css'
import '../css/app.scss'
import { Container, createTheme, CssBaseline, NoSsr, ThemeProvider } from "@mui/material";
import { i18nFileVersion } from '@src/i18nconf/i18nFileVersion';
import { store } from '@src/libs/fanfanlo/jotai/store';
import { Provider } from 'jotai';
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
  // Router.reload(window.location.pathname);
  // console.log(`i18nFileVersion=`, i18nFileVersion)
  return (
    <Fragment>
      <CssBaseline />
      <NoSsr>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container id={"mui-root-container"} maxWidth="lg"  fixed>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
        </Provider>
      </NoSsr>
    </Fragment>
  );
}
export default MyApp;
