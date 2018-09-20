import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { FETCH_BANK_BALANCE } from '../../../store/constants';
import bankImages from '../../../assets/images/banklogos/index';
import StyledText from '../../atoms/StyledText';

class BankBalance extends PureComponent {

  componentDidMount() {
    this.props.dispatch({ type: FETCH_BANK_BALANCE });
  }

  render() {
    if (!this.props.bankBalance) {
      return null;
    }
    const {
      bankBalance: { balance, userName },
      selectedBank: { bankName, logoImage }
    } = this.props;
    return (
      <View style={{ flex: 1, padding: 20, justifyContent: 'flex-start' }}>
        <View style={{ paddingBottom: 20, marginVertical: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bank balance</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{ fontSize: 24 }}>{bankName}</Text>
          <Image source={bankImages[bankName]} />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 30,
          marginVertical: 20,
          backgroundColor: '#ccc',
        }}>
          <Text style={{ fontSize: 28 }}>Balance</Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>£{balance}</Text>
        </View>
      </View>

    );
  }
}

const mapsStateToProps = (state) => {
  return {
    bankBalance: state.bankBalance.data,
    selectedBank: state.bank.selected,
  };
};

export default connect(mapsStateToProps)(BankBalance);
