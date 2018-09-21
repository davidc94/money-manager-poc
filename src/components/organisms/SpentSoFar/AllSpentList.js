import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 24,
  },
});

const AllSpentList = ({ data, sliceColor }) => data.map((item, i) => (
  <View key={i} style={styles.container}>
    <Text style={styles.label}>{item.title}</Text>
    <Text style={styles.value}>£{item.amount}</Text>
  </View>
));

export default AllSpentList;
