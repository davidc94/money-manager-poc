import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Login extends PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setup')}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
