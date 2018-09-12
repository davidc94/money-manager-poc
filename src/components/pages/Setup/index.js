import React, { PureComponent } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';

export default class Setup extends PureComponent {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseBank')}>
          <Text>Setup</Text>
        </TouchableOpacity>
        <StyledView>
          <StyledText size weight>How does this set up work?</StyledText>
          <StyledText weight>Step 1</StyledText>
          <StyledText>
            Choose your bank -  You select your bank from the list of
            selected bank we work with!
          </StyledText>
          <StyledText weight>Step 2</StyledText>
          <StyledText>
            Your consent - We need your permission so
            that we can connect to your selected bank
            and one of the current account.
          </StyledText>
          <StyledText weight>Step 3</StyledText>
          <StyledText>
            Choose bank account - You will choose the bank account
            that you use for your day to day spend (if you have more
            than one current account)
          </StyledText>
          <StyledButton>Continue</StyledButton>
        </StyledView>
      </ScrollView>
    );
  }
}
