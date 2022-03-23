import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import './index.css';
import MaskedSingers from './components/MaskedSingers/MaskedSingers';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://elegant-cardinal-44.hasura.app/v1/graphql',
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <MaskedSingers />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));