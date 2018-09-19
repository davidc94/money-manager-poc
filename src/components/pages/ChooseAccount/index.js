import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, FlatList} from 'react-native';
import { connect } from 'react-redux';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';
import { FETCH_BANK_ACCOUNT_DATA, SELECTED_BANK_ACCOUNT_DATA } from "../../../store/constants";
import bankImages from '../../../assets/images/banklogos/index';


const styles = {
  container: { flex: 1, justifyContent: 'center' },
  viewDefaultStyle: {flex:1, flexDirection:'row',justifyContent:"center", alignItems:"center", padding: 20, margin:10, backgroundColor: '#fff', borderColor: '#D3D3D3', borderWidth: 1, borderRadius: 5},
  viewSelectedStyle: {flex:1, flexDirection:'row',justifyContent:"center", alignItems:"center", padding: 20, margin:10, backgroundColor: '#ccebff', borderColor: '#0000FF',borderWidth: 1,borderRadius: 5},
  imageStyle: {width: 50, height: 50, flex: 1, marginRight: 30,resizeMode: 'contain'},
  childViewStyle: {flex:3,flexDirection:'column'},
  textStyle: { marginBottom:10 },
  bottomView: { padding: 10, margin:20, alignItems: 'center'},
  continueButton: { width:"68%"}
}
class ChooseAccount extends PureComponent {
  state = {
    selectAccount: false
  }  

  componentDidMount(){
    this.props.dispatch({ type: FETCH_BANK_ACCOUNT_DATA })
    }

renderItem = ({ item }) => {
  const bankAccount = (this.props.selectedBankAccount === undefined ? null : this.props.selectedBankAccount.accountNumber);
  console.log("props" + bankAccount);
  console.log("item" + item.accountNumber);
  const viewStyle = item.accountNumber === bankAccount 
    ? styles.viewSelectedStyle 
    : styles.viewDefaultStyle;
    return( 
      <TouchableOpacity
        onPress={ () => this.props.dispatch({ type: SELECTED_BANK_ACCOUNT_DATA, payload: item })}
        data-test="account-list-item"
      >
        <View style={viewStyle}>
          <Image source={ bankImages[this.props.selectedBank.bankName] } style={styles.imageStyle}></Image>
          <View style={styles.childViewStyle}>
            <Text style={styles.textStyle}>
              {this.props.selectedBank.bankName} 
              </Text>
              <Text style={styles.textStyle}>
              {item.accountType}
              </Text>
              <Text style={styles.textStyle}>
              {item.sortCode}  {item.accountNumber}
            </Text>
          </View>
        </View>
     </TouchableOpacity>
    )
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <StyledView>
            <StyledText>
              We found three accounts in your name.
              Which account do you use on a daily 
              basis?
            </StyledText>
              <FlatList
                data= {this.props.bankAccountList}
                extraData= {this.state}
                renderItem = { this.renderItem }
                keyExtractor = {(item) => item.accountNumber }
              /> 
        </StyledView>
        <StyledView style={styles.bottomView}>
              <StyledButton  disabled={!this.state.selectAccount}  style={styles.continueButton}
                onPress={() => this.props.navigation.navigate('Dashboard')}
                data-test="nextButton"
                >
                Select & Continue
              </StyledButton>
        </StyledView>      
       </ScrollView>  
    );
  }
}

const mapStateToProps = (state) => ({
  selectedBank: state.bank.selected,
  bankAccountList: state.bank.accountList,
  selectedBankAccount: state.bank.selectedAccount
})

export default connect (mapStateToProps)(ChooseAccount);
