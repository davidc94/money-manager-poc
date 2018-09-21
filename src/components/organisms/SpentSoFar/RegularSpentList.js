import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

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
    fontSize: 14,
  },
  title: {
    fontSize: 20,
  },
  amount: {
    fontSize: 24,
  }
});

const RegularSpentList = ({ data, sliceColor }) => {
  return (
    <ScrollView>
      {data.map((item, i) => {
        return (
          <View key={i} style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={{ color: sliceColor[i], marginRight: 10 }}>&#9679;</Text>
              </View>

              <View style={styles.containerLeft}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>£{item.amount}</Text>
            </View>
          </View>
        );
      })
      }
    </ScrollView>
  );
};

export default RegularSpentList;
