import React, { PureComponent } from 'react';
import { View } from 'react-native';
import StyledTextInput from '../../atoms/StyledTextInput';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';
import StyledView from '../../atoms/StyledView';

const styles = {
  container: { justifyContent: 'center' },
  centered: { textAlign: 'center' },
};

export default class Login extends PureComponent {
  render() {
    return (
      <StyledView style={styles.container}>
        <View>
          <StyledText weight style={styles.centered}>USERNAME</StyledText>
          <StyledTextInput />
        </View>
        <View>
          <StyledText weight style={styles.centered}>PASSWORD</StyledText>
          <StyledTextInput password />
        </View>
        <StyledButton
          onPress={() => this.props.navigation.navigate('Setup')}
        >
          LOGIN
        </StyledButton>
      </StyledView>
    );
  }
}
