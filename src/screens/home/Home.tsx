import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const Home:FC = () => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);
  console.log('data::', data);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
