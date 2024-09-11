import {View, Text} from 'react-native';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const uri = 'https://api.graphql.guide/graphql';
const cache = new InMemoryCache();
const client = new ApolloClient({uri, cache});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>App</Text>
      </View>
    </ApolloProvider>
  );
};

export default App;
