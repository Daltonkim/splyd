import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// import { LastLocationProvider } from "react-router-last-location";
import { Routes } from "./router/Routes";
import { Suspense } from "react";
import { LayoutSplashScreen } from './components/layout/LayoutContext';
import I18nProvider from './components/i18n/I18nProvider';

function App({ store, persistor, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <Suspense fallback={<LayoutSplashScreen />}>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={basename}>
            {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
            {/* <LastLocationProvider> */}
              {/* Provide Metronic theme overrides. */}
                {/* Provide `react-intl` context synchronized with Redux state.  */}
                <I18nProvider>
                  {/* Render routes with provided `Layout`. */}
                  <Routes />
                </I18nProvider>
            {/* </LastLocationProvider> */}
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
