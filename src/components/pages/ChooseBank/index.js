import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ChooseBank extends PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Consent')}>
          <Text>
            ChooseBank
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
