import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { Provider } from 'react-redux';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import App from './App';
import GlobalStyles from './utils/global';
import store from './store';
import { Theme } from './theme/components';

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

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Theme>
          <React.Fragment>
            <GlobalStyles />
            <App />
          </React.Fragment>
        </Theme>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
