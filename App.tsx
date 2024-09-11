import {View, Text} from 'react-native';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Home from './src/screens/home/Home';

// Initialize Apollo Client
const uri = 'https://api.graphql.guide/graphql';
const cache = new InMemoryCache();
const client = new ApolloClient({uri, cache});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Graph QL</Text>
        <Home />
      </View>
    </ApolloProvider>
  );
};

export default App;
