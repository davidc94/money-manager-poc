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
  title: {
    fontSize: 20,
  },
  amount: {
    fontSize: 24,
  }
});

const DayToDaySpentList = ({ data, sliceColor }) => {
  return data.map((item, i) => {
    return (
      <View key={i} style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: sliceColor[i], marginRight: 10 }}>&#9679;</Text>
          <Text style={styles.title}>{item.category}</Text>
        </View>
        <Text style={styles.amount}>£{item.amount}</Text>
      </View>
    );
  });
};

export default DayToDaySpentList;
