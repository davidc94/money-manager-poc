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
    const chart_wh = 200;
    const series = [0.5, 1.75, 2, 3.55, 5.67];
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar
            hidden
          />
          <Text style={styles.title}>Doughnut chart</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut
            coverRadius={0.45}
            coverFill="#FFF"
          />
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('test', () => test);
