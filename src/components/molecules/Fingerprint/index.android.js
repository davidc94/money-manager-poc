import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { withNavigation } from 'react-navigation';
import StyledButton from '../../atoms/StyledButton';


class FingerprintPopup extends Component {
  componentWillUnmount() {
    FingerprintScanner.release();
  }

  scanning() {
    console.log('scanned - scanning');
    FingerprintScanner
      .authenticate({ onAttempt: this.handleAuthenticationAttempted })
      .then(() => {
        console.log('scanned - success');
        this.props.navigation.navigate('Setup');
      })
      .catch((error) => {
        console.log(`scanned - failed${error}`);
      });
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <StyledButton onPress={() => this.scanning()}>
          Fingerprint
        </StyledButton>
      </View>
    );
  }
}

export default withNavigation(FingerprintPopup);
