import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';

export default class Setup extends PureComponent {
  render() {
    const { container, step, text, header, buttonWrapper } = styles;

    return (
      <ScrollView>
        <StyledView style={container}>
          <StyledText weight style={header}>How does this </StyledText>
          <StyledText weight style={header}>set up work?</StyledText>
          <StyledText weight style={step}>Step 1</StyledText>
          <StyledText style={text}>
            <StyledText weight>Choose your bank </StyledText>
             - You select your bank from the list of
            selected bank we work with!
          </StyledText>

          <StyledText weight style={step}>Step 2</StyledText>
          <StyledText style={text}>
            <StyledText weight>Your consent </StyledText>
             - We need your permission so
            that we can connect to your selected bank
            and one of the current account.
          </StyledText>
          <StyledText weight style={step}>Step 3</StyledText>
          <StyledText style={text}>
            <StyledText weight>Choose bank account </StyledText> 
             - You will choose the bank account
            that you use for your day to day spend (if you have more
            than one current account)
          </StyledText>
          <View style={buttonWrapper}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'flex-start',
    fontSize: 22,
    marginTop: 15,
    marginLeft: 25,
    fontSize: 35,
  },
  step: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingLeft: 25,
    color: '#2E7AF6',
  },
  text: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  buttonWrapper: {
    paddingHorizontal: 80,
    marginTop: 30,
  },
};
