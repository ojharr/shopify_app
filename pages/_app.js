import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import { Frame, Navigation, TopBar } from '@shopify/polaris';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider i18n={translations}>
      <Frame>
        <Component {...pageProps} />
      </Frame>
    </AppProvider>
  );
}

export default MyApp;
