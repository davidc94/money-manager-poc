import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import AppNav from './AppNav';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNav />
      </SafeAreaView>
    );
  }
}
