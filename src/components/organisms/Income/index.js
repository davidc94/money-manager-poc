import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { FETCH_INCOME_DATA } from '../../../store/constants';
import StyledText from '../../atoms/StyledText';

class Income extends PureComponent {
  componentDidMount() {
    this.props.dispatch({ type: FETCH_INCOME_DATA });
  }

  render() {
    if (!this.props.incomeList) { return null; }

    const {
      incomeList: { income },
    } = this.props;

    const receivedAmount = this.props.incomeList.income
      .map(income => income.amount)
      .reduce((acc, currentValue) => acc + currentValue);

    const {
      outerStyle, midTextStyle, receivedAmountStyle,
      itemStyle, dateStyle, flexEndStyle,
    } = styles;

    return (
      <View style={outerStyle}>
        <StyledText size weight>Income</StyledText>
        <StyledText style={dateStyle}>This month (1st June '18 - 18th October '18)</StyledText>
        <View style={receivedAmountStyle}>
          <StyledText style={midTextStyle}>Received so far</StyledText>
          <View style={flexEndStyle}>
            <StyledText size weight>£</StyledText>
            <StyledText size weight>{receivedAmount}</StyledText>
          </View>
        </View>
        <FlatList
          data={this.props.incomeList.income}
          renderItem={({ item }) => (
            <View style={itemStyle}>
              <View>
                <StyledText>{item.date}</StyledText>
                <StyledText style={midTextStyle}>{item.title}</StyledText>
              </View>
              <Text style={midTextStyle}>
£
{item.amount}
</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = {
  outerStyle: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    padding: 10,
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },
  receivedAmountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  midTextStyle: {
    fontSize: 25,
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  dateStyle: {
    fontSize: 13,
  },
  flexEndStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
};

const mapStateToProps = state => ({
  incomeList: state.income.incomeList,
});

export default connect(mapStateToProps)(Income);
