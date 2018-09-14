import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, FlatList} from 'react-native';
import StyledView from '../../atoms/StyledView';
import StyledText from '../../atoms/StyledText';
import StyledButton from '../../atoms/StyledButton';

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
      'accountType':'`Corporate` Account',
      'sortCode':'20-01-89',
      'accountNumber': '54923767'
    }]
  }

  selectAccount =(account) => 
    this.setState({
      selectAccount:account
    });
  

renderItem = ({item}) => {
  const bdColor = item.accountNumber === this.state.selectAccount ? 'blue': 'lightgray';
  const bgColor = item.accountNumber === this.state.selectAccount ? '#ccebff': '#fff';
    return( 
      <TouchableOpacity onPress={ () => this.selectAccount(item.accountNumber)}>
        <View style={{flex:1, flexDirection:'row',justifyContent:"center", alignItems:"center", padding: 20, margin:10,borderColor: bdColor, backgroundColor:bgColor, borderStyle:"solid", borderWidth:1
            }}>
          <Image source={{ uri: item.imgUrl }} style={{width: 50, height: 50, flex: 1, marginRight: 30}}></Image>
          <View style={{flex:3,flexDirection:'column'}}>
            <Text style={{marginBottom:10}}>
              {item.bankName}
              </Text>
              <Text style={{marginBottom:10}}>
              {item.accountType}
              </Text>
              <Text style={{marginBottom:10}}>
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
        <StyledView style={{ padding: 10 }}>
              <StyledButton  disabled={!this.state.selectAccount}  style={{fontSize:12, width:"100%" }}
                onPress={() => this.props.navigation.navigate('Dashboard')}>
                Select & Continue
              </StyledButton>
        </StyledView>      
       </ScrollView>  
    );
  }
}