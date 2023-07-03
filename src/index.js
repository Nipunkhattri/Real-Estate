import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import store from './redux/store';

const theme = extendTheme({
  colors: {
    primaryBg: "#E8EDF1",
    secondaryBg:"#92B161",
    primaryText:"#000000",
    primary: "#9F366E",
    secondary: "#FAA617",
    bgSecondary: "#F3F3F3",
    btnPrimary: "#FF8A00"
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);

reportWebVitals();
