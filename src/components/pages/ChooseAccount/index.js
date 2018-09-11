import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ChooseAccount extends PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text>
            ChooseAccount
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
