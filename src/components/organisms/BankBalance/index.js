import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { FETCH_BANK_BALANCE } from '../../../store/constants';
import bankImages from '../../../assets/images/banklogos/index';
import StyledText from '../../atoms/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    paddingBottom: 20,
    marginVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bankDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankName: { fontSize: 24 },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 20,
    backgroundColor: '#ccc',
  },
  balanceTitle: { fontSize: 28 },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});

class BankBalance extends PureComponent {

  componentDidMount() {
    this.props.dispatch({ type: FETCH_BANK_BALANCE });
  }

  render() {
    if (!this.props.bankBalance) {
      return null;
    }
    const {
      bankBalance: { balance },
      selectedBank: { bankName }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Bank balance</Text>
        </View>
        <View style={styles.bankDetailsContainer}>
          <Text style={styles.bankName}>{bankName}</Text>
          <Image source={bankImages[bankName]} />
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.balanceAmount}>{`£${balance}`}</Text>
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
