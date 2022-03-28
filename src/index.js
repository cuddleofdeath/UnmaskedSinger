import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import './index.css';
import MaskedSingers from './components/MaskedSingers/Season1/MaskedSingers';
import NewMaskedSingers from './components/MaskedSingers/Season1/NewMaskedSingers';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Grid } from '@mui/material';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://elegant-cardinal-44.hasura.app/v1/graphql',
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <NavigationBar />
    <Grid container>
      <Grid item xs={5} sm={6}>
        <NewMaskedSingers className='content' />
      </Grid>
    </Grid>
    {/* <MaskedSingers className='content' /> */}
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
