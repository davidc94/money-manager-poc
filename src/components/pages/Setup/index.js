import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';

export default class Setup extends PureComponent {
  render() {

    const { header, step, text, button } = styles;

    return (
      <ScrollView>
        <StyledView style={header}>
          <StyledText size weight>How does this</StyledText>
          <StyledText size weight>set up work?</StyledText>
          <StyledText weight style={step}>Step 1</StyledText>
          <StyledText style={text}>
            Choose your bank -  You select your bank from the list of
            selected bank we work with!
          </StyledText>

          <StyledText weight style={step}>Step 2</StyledText>
          <StyledText style={text}>
            Your consent - We need your permission so
            that we can connect to your selected bank
            and one of the current account.
          </StyledText>
          <StyledText weight style={step}>Step 3</StyledText>
          <StyledText style={text}>
            Choose bank account - You will choose the bank account
            that you use for your day to day spend (if you have more
            than one current account)
          </StyledText>
          <View style={{ paddingHorizontal: 80, marginTop: 30 }}>
            <StyledButton
              onPress={() => this.props.navigation.navigate('ChooseBank')}
            >
              Continue
          </StyledButton>
          </View>
        </StyledView>
      </ScrollView>
    );
  }
}

const styles = {
  header: {
    alignItems: 'center',
    marginTop: 15,
  },
  step: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  button: {
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
};
