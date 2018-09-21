import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  label: {
    fontSize: 23,
  },
  value: {
    fontSize: 24,
  },
});

const AllSpentList = ({ data, sliceColor }) => data.map((item, i) => (
  <View key={i} style={styles.container}>
    <StyledText style={styles.label}>{item.title}</StyledText>
    <StyledText style={styles.value}>£{item.amount}</StyledText>
  </View>
));

export default AllSpentList;
