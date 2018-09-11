import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import Dashboard from './components/pages/Dashboard';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Dashboard />
      </SafeAreaView>
    );
  }
}
