import React, { PureComponent } from 'react';
import { View } from 'react-native';
import StyledTextInput from '../../atoms/StyledTextInput';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';
import StyledView from '../../atoms/StyledView';
import FingerprintPopup from '../../molecules/Fingerprint';

const styles = {
  container: { justifyContent: 'center' },
  centered: { textAlign: 'center' },
  button: { marginTop: 15 },
  input: { paddingHorizontal: 30, marginVertical: 10 },
};

export default class Login extends PureComponent {
  render() {
    const { container, centered, button, input } = styles;
    return (
      <StyledView style={container}>
        <View style={input}>
          <StyledText weight style={centered}>USERNAME</StyledText>
          <StyledTextInput />
        </View>
        <View style={input}>
          <StyledText weight style={centered}>PASSWORD</StyledText>
          <StyledTextInput password />
        </View>
        <View style={{ paddingHorizontal: 80 }}>
          <StyledButton
            style={button}
            onPress={() => this.props.navigation.navigate('Setup')}
          >
            LOGIN
          </StyledButton>
          <FingerprintPopup />
        </View>
      </StyledView>
    );
  }
}
