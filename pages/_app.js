import I18n from "../lib/i18n";

export default function MyApp({ Component, pageProps }) {
  console.log(`my app page props`, pageProps);
  
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <Component {...pageProps} />
    </I18n>
  );
}
