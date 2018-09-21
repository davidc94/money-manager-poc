import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { FETCH_BANK_BALANCE } from '../../../store/constants';
import bankImages from '../../../assets/images/banklogos/index';
import StyledText from '../../atoms/StyledText';

class BankBalance extends PureComponent {

  render() {
    if (!this.props.bankBalance) {
      return null;
    }
    const {
      bankBalance: { balance, userName },
      selectedBank: { bankName, logoImage },
      selectedAccount
    } = this.props;
    return (
      <View style={{ flex: 1, padding: 20, justifyContent: 'flex-start' }}>
        <View style={{ paddingBottom: 20, marginVertical: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
          <StyledText size weight>Bank balance</StyledText>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
          <View>
            <Text style={{ fontSize: 25 }}>{bankName}</Text>
            <Text style={{ fontSize: 13 }}>{selectedAccount.accountType}</Text>
          </View>
          <Image source={bankImages[bankName]} />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 30,
          marginVertical: 20,
          backgroundColor: '#ccc',
        }}>
          <Text style={{ fontSize: 25 }}>Balance</Text>
          <StyledText size weight>£{balance}</StyledText>
        </View>
      </View>

    );
  }
}

const mapsStateToProps = (state) => {
  return {
    bankBalance: state.bankBalance.data,
    selectedBank: state.bank.selected,
    selectedAccount: state.bank.selectedAccount
  };
};

export default connect(mapsStateToProps)(BankBalance);
