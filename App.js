import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {Splash}  from './screens/splash';
import Intro from './screens/Intro';


export default class App extends React.Component {
  render() {
    return (
    <Intro/>
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
});
