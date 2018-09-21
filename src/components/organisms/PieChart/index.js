import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, ScrollView, StatusBar, Text, View,
} from 'react-native';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 5,
  },
});

export default class test extends Component {
  render() {
    const chartWh = 200;
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
    return (
      <PieChart
        chart_wh={chartWh}
        series={this.props.data}
        sliceColor={sliceColor}
        doughnut
        coverRadius={0.65}
        coverFill="#eee"
        style={{ alignSelf: 'center', }}
      />
    );
  }
}

AppRegistry.registerComponent('test', () => test);
