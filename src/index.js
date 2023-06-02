import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { theme } from './utils/extendTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
