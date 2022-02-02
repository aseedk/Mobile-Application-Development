import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './components/MainComponent';
import SubComponent from './components/SubComponent';


export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <SubComponent></SubComponent>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});
