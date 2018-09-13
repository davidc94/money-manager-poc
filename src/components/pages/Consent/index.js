import React, { PureComponent } from 'react';
import { StyleSheet, Switch, ScrollView, View } from 'react-native';
import StyledButton from '../../atoms/StyledButton';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import AccordionView from './AccordionView';


export default class Consent extends PureComponent {

  state = {
    nextButtonEnabled: false
  }

  switchValueChange = () => this.setState((prevState) => ({ nextButtonEnabled: !prevState.nextButtonEnabled }));

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View>
          <StyledText>
            Don't worry, this is all perfectly safe.
            All we can do is look at
          </StyledText>
        </View>
        <View>
          <AccordionView />
        </View>
        <View>
          <StyledText>
            gameplan can only read your bank data and can't make payments or change your account.
          </StyledText>
        </View>
        <View>
          <StyledText>
            We connect securely to your bank through our trusted partner TrueLayer and we'll only be able to view these for three months. Your data will never be shared with third parties without your permission
          </StyledText>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
          <Switch
            onValueChange={this.switchValueChange}
            style={{ flex: 1, alignSelf: 'stretch' }}
            value={this.state.nextButtonEnabled}
          />
          <StyledText style={{ flex: 2, alignSelf: 'stretch' }}>
            You agree to our terms & conditions and privacy policy which covers how giffgaff can access and use your data
          </StyledText>
        </View>
        <View>
          <StyledText>
            We'll now securely take you to your bank/building society
          </StyledText>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
          <StyledButton
            style={{ flex: 1, alignSelf: 'stretch' }}
            onPress={() => navigation.navigate('ChooseBank')}
          >
            Disagree
          </StyledButton>
          <StyledButton
            disabled={!this.state.nextButtonEnabled}
            style={{ flex: 1, alignSelf: 'stretch' }}
            onPress={() => navigation.navigate('ChooseAccount')}
          >
            Agree
          </StyledButton>
        </View>
      </ScrollView>
    );
  }
}
