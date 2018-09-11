import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Setup extends PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseBank')}>
          <Text>
            Setup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
