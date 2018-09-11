import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Consent extends PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseAccount')}>
          <Text>
            Consent
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
