import React, { PureComponent } from 'react';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import StyledTextInput from '../../atoms/StyledTextInput';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';

const styles = {
  container: { flex: 1, justifyContent: 'center' },
  centered: { textAlign: 'center' },
  button: { marginTop: 20 },
}

export default class Login extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <StyledText weight style={styles.centered}>USERNAME</StyledText>
          <StyledTextInput />
        </View>
        <View>
          <StyledText weight style={styles.centered}>PASSWORD</StyledText>
          <StyledTextInput password />
        </View>
        <StyledButton 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Setup')}
        >
          LOGIN
        </StyledButton>
      </View>
    );
  }
}
