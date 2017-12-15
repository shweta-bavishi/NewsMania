import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import NewsList from './src/components/NewsList';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header name={'News'} />
        <NewsList />
    </View>
  );
};

AppRegistry.registerComponent('NewsMania', () => App);
