import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import el from 'react-intl/locale-data/el';
import App from './App';
import theme from './utils/theme';
import GlobalStyles from './utils/global';

addLocaleData(en);
addLocaleData(el);

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <App />
      </React.Fragment>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
