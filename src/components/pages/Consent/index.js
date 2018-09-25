import React, { PureComponent } from 'react';
import { StyleSheet, Switch, ScrollView, View } from 'react-native';
import StyledButton from '../../atoms/StyledButton';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import AccordionView from './AccordionView';
import PropTypes from 'prop-types';

const StyledContainer = StyledView.extend`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default class Consent extends PureComponent {

  state = {
    nextButtonEnabled: false
  }

  switchValueChange = () => this.setState((prevState) => ({ nextButtonEnabled: !prevState.nextButtonEnabled }));

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View style={{ marginTop: 15, marginBottom: 15, flex: 1, alignSelf: 'center' }}>
          <StyledText weight>Don't worry, this is all perfectly safe.</StyledText>
          <StyledText weight>All we can do is look at...</StyledText>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <AccordionView />
        </View>
        <View>
          <StyledText style={{ paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
            gameplan can only read your bank data and can't make payments or change your account.
          </StyledText>
        </View>
        <View>
          <StyledText style={{ paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
            We connect securely to your bank through our trusted partner TrueLayer and we'll only be able to view these for three months. Your data will never be shared with third parties without your permission
          </StyledText>
        </View>
        <StyledContainer>
          <StyledView style={{ alignItems: 'center' }}>
            <Switch
              onValueChange={this.switchValueChange}
              value={this.state.nextButtonEnabled}
            />
          </StyledView>
          <StyledText style={{ fontSize: 15, flex: 2, paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
            You agree to our terms &amp; conditions and privacy policy which covers how giffgaff can access and use your data
          </StyledText>
        </StyledContainer>
        <View>
          <StyledText style={{ paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
            We will now securely take you to your bank/building society
          </StyledText>
        </View>
        <StyledView style={{ flexDirection: 'row', padding: 30 }}>
          <StyledButton
            outlined
            style={{ flex: 1, marginRight: 30 }}
            onPress={() => navigation.navigate('ChooseBank')}
          >
            Disagree
          </StyledButton>
          <StyledButton
            disabled={!this.state.nextButtonEnabled}
            style={{ flex: 1 }}
            onPress={() => navigation.navigate('ChooseAccount')}
          >
            Agree
          </StyledButton>
        </StyledView>
      </ScrollView>
    );
  }
}

Consent.propTypes = {
  navigation: PropTypes.object,
}