import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, FlatList} from 'react-native';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';

const styles = {
  container: { flex: 1, justifyContent: 'center' },
  viewDefaultStyle: {flex:1, flexDirection:'row',justifyContent:"center", alignItems:"center", padding: 20, margin:10, backgroundColor: '#fff', borderColor: '#D3D3D3', borderWidth: 1},
  viewSelectedStyle: {flex:1, flexDirection:'row',justifyContent:"center", alignItems:"center", padding: 20, margin:10, backgroundColor: '#ccebff', borderColor: '#0000FF',borderWidth: 1},
  imageStyle: {width: 50, height: 50, flex: 1, marginRight: 30},
  childViewStyle: {flex:3,flexDirection:'column'},
  textStyle: { marginBottom:10 },
  bottomView: { padding: 10},
  continueButton: { width:"70%"}
}
export default class ChooseAccount extends PureComponent {
  state = {
    selectAccount: false,
    data:[{
      'imgUrl' :'https://i.imgur.com/K3KJ3w4h.jpg',
      'bankName': 'HSBC Bank (UK)',
      'accountType':'Advance Account',
      'sortCode':'20-01-89',
      'accountNumber': '54923765'
    },
    {
      'imgUrl' :'https://i.imgur.com/K3KJ3w4h.jpg',
      'bankName': 'HSBC Bank (UK)',
      'accountType':'Premier Account',
      'sortCode':'20-01-89',
      'accountNumber': '54923766'
    },
    {
      'imgUrl' :'https://i.imgur.com/K3KJ3w4h.jpg',
      'bankName': 'HSBC Bank (UK)',
      'accountType':'Corporate Account',
      'sortCode':'20-01-89',
      'accountNumber': '54923767'
    }]
  }

  selectAccount =(account) => 
    this.setState({
      selectAccount:account
    });
  

renderItem = ({item}) => {
  const viewStyle = item.accountNumber === this.state.selectAccount ? styles.viewSelectedStyle: styles.viewDefaultStyle;
    return( 
      <TouchableOpacity onPress={ () => this.selectAccount(item.accountNumber)}>
        <View style={viewStyle}>
          <Image source={{ uri: item.imgUrl }} style={styles.imageStyle}></Image>
          <View style={styles.childViewStyle}>
            <Text style={styles.textStyle}>
              {item.bankName} 
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
    const thumbnail_image= 'https://i.imgur.com/K3KJ3w4h.jpg';
    return (
      <ScrollView>
        <StyledView>
            <StyledText>
              We found three accounts in your name.
              Which account do you use on a daily 
              basis?
            </StyledText>
              <FlatList
                data= {this.state.data}
                renderItem = { this.renderItem }
                extraData= {this.state}
              /> 
        </StyledView>
        <StyledView style={styles.bottomView}>
              <StyledButton  disabled={!this.state.selectAccount}  style={styles.continueButton}
                onPress={() => this.props.navigation.navigate('Dashboard')}>
                Select & Continue
              </StyledButton>
        </StyledView>      
       </ScrollView>  
    );
  }
}