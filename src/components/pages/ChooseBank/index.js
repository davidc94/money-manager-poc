import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import StyledButton from '../../atoms/StyledButton';
import StyledText from '../../atoms/StyledText';
import { FETCH_BANK_DATA, SELECTED_BANK_DATA } from "../../../store/constants";
import bankImages from '../../../assets/images/banklogos/index';

const styles = StyleSheet.create({
  bankItem: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5
  },

  bankItemSelected: {
    backgroundColor: '#ccebff',
    borderColor: '#00f'
  },

});

class ChooseBank extends PureComponent {

  componentDidMount() {
    this.props.dispatch({ type: FETCH_BANK_DATA })
  }

  renderListItem = ({ item }) => {
    let selected = '';

    if (this.props.selectedBank && this.props.selectedBank.bankName === item.bankName) {
      selected = styles.bankItemSelected;
    }

    return (
      <TouchableOpacity
        onPress={() => this.props.dispatch({ type: SELECTED_BANK_DATA, payload: item })}
        style={[styles.bankItem, selected]}
        data-test="bank-list-item"
      >
        <View style={{ width: 50, height: 50, margin: 5, flex: 1 }}>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={bankImages[item.bankName]} />
        </View>
        <StyledText style={{ flex: 4 }}>
          {item.bankName}
        </StyledText>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View>
        <StyledText style={{ marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 15 }}>
          Select your bank that your day to day spending account is with.
        </StyledText>
        <FlatList
          style={{ marginBottom: 50 }}
          data={this.props.bankList}
          renderItem={this.renderListItem}
          keyExtractor={(item) => item.bankName}
        />
        <View style={{ paddingHorizontal: 80 }}>
          <StyledButton
            disabled={!this.props.selectedBank}
            onPress={
              () => this.props.navigation.navigate('Consent')
            }
            data-test="nextButton"
          >
            Connect to bank
          </StyledButton>
        </View>
      </View >
    );
  }
}

const mapStateToProps = (state) => ({
  bankList: state.bank.list,
  selectedBank: state.bank.selected
})

export default connect(mapStateToProps)(ChooseBank);
