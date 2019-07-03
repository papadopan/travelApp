import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './utils/theme';
import GlobalStyles from './utils/global';

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
