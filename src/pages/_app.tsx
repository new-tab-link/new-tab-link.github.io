'use client'
import { Container, createTheme, NoSsr, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";

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
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </NoSsr>
  );
}
export default MyApp;
