import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import App from './App';
import theme from './utils/theme';
import GlobalStyles from './utils/global';
import store from './store';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  headers: {
    Authorization: document.cookie ? `Bearer ${document.cookie.slice(5)}` : null
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
            <App />
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
