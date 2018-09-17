import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import StyledButton from '../../atoms/StyledButton';
import StyledText from '../../atoms/StyledText';

const styles = StyleSheet.create({
  bankItem: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
  },
});

export default class ChooseBank extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        bankName: 'Barclays',
        logoImage: require('../../../assets/images/banklogos/barclayslogo.jpg'),
      }, {
        bankName: 'LloydsBank',
        logoImage: require('../../../assets/images/banklogos/lloydslogo.jpg')
      }, {
        bankName: 'HSBC',
        logoImage: require('../../../assets/images/banklogos/hsbclogo.jpg')
      }],
      selectedBank: false,
    }
  }

  selectBank = (selectedBank) => this.setState({ selectedBank });

  renderListItem = ({ item }) => {
    const bdColor = item.bankName === this.state.selectedBank ? '#000' : '#ccc';
    return (
      <TouchableOpacity
        onPress={() => this.selectBank(item.bankName)}
        style={[styles.bankItem, { borderColor: bdColor }]}
        data-test="bank-list-item"
      >
        <View style={{ width: 50, height: 50, margin: 5, flex: 1 }}>
          <Image style={{ width: '100%', resizeMode: 'contain' }} source={item.logoImage} />
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
          data={this.state.data}
          extraData={this.state}
          renderItem={this.renderListItem}
          keyExtractor={(item) => item.bankName}
        />
        <View style={{ paddingHorizontal: 80 }}>
          <StyledButton
            disabled={!this.state.selectedBank}
            onPress={() => this.props.navigation.navigate('Consent')}
            data-test="nextButton"
          >
            Connect to bank
          </StyledButton>
        </View>
      </View >
    );
  }
}
