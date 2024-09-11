import {View, Text} from 'react-native';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

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
