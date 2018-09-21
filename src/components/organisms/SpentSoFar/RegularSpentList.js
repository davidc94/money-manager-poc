import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  containerLeft: {
    paddingVertical: 5,
  },
  date: {
    fontSize: 18,
  },
  title: {
    fontSize: 23,
  },
  amount: {
    fontSize: 24,
  }
});

const RegularSpentList = ({ data, sliceColor }) => {
  return data.map((item, i) => {
    return (
      <View key={i} style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ color: sliceColor[i], marginRight: 10 }}>&#9679;</Text>
          </View>

          <View style={styles.containerLeft}>
            <StyledText style={styles.date}>{item.date}</StyledText>
            <StyledText style={styles.title}>{item.title}</StyledText>
          </View>
        </View>
        <View>
          <StyledText style={styles.amount}>£{item.amount}</StyledText>
        </View>
      </View>
    );
  });
};

export default RegularSpentList;
