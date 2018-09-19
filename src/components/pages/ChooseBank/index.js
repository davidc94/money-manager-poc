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
    padding: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
  },
});

class ChooseBank extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedBank: false,
    }
  }

  componentDidMount(){
    this.props.dispatch({ type: FETCH_BANK_DATA })
  }

  renderListItem = ({ item }) => {
    const bankName = (this.props.selectedBank === undefined ? null : this.props.selectedBank.bankName);
    const bdColor = item.bankName === bankName ? '#000' : '#ccc';

    return (
      <TouchableOpacity
        onPress={() => this.props.dispatch({ type: SELECTED_BANK_DATA, payload: item })}
        style={[styles.bankItem, { borderColor: bdColor }]}
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
        <StyledText style={{ marginVertical: 30 }}>
          Select your bank that your day to day spending account is with.
        </StyledText>
        <FlatList
          style={{ marginBottom: 50 }}
          data={this.props.bankList}
          extraData={this.state}
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
  bankList: state.bankReducers.bankList,
  selectedBank: state.bankReducers.selectedBank
})

export default connect (mapStateToProps)(ChooseBank);
