import {gql, useQuery} from '@apollo/client';
import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const Home: FC = () => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (loading) {
      setList([]);
    } else {
      setList(data?.chapters);
    }
  }, [loading == false]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{flex: 1, padding: 10}}>
        {loading ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={'large'} />
            <Text>{'  '}Loading...</Text>
          </View>
        ) : (
          list?.map((item: any, index: number) => {
            return (
              <Text
                key={item?.id}
                style={{
                  color: index % 2 == 0 ? 'red' : index % 3 ? 'blue' : 'black',
                  fontSize: index % 2 == 0 ? 14 : index % 3 ? 18 : 25,
                  marginTop: 5,
                }}>
                {index + 1}
                {'. '}
                {item?.title}
              </Text>
            );
          })
        )}
      </View>
    </View>
  );
};

export default Home;
