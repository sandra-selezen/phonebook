import '@fontsource/poppins'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { theme } from './utils/extendTheme';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <BrowserRouter basename='/phonebook'>
          <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
