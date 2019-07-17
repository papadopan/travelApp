import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import el from 'react-intl/locale-data/el';
import { ApolloClient } from 'apollo-client';
import { Provider } from 'react-redux';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import App from './App';
import theme from './utils/theme';
import GlobalStyles from './utils/global';
import store from './store';
import messages from './translations';
// create a link for our graphql server
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

// authentication middleware
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}` || 'as'
    }
  });

  return forward(operation);
});

// create Apollo Client
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

addLocaleData([...en, ...el]);

const lang = 'en';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={lang} messages={messages[lang]}>
            <React.Fragment>
              <GlobalStyles />
              <App />
            </React.Fragment>
          </IntlProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
