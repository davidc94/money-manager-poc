import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import StyledText from '../../atoms/StyledText';
import PropTypes from 'prop-types';

class Income extends PureComponent {

  render() {
    if (!this.props.incomeList) { return null; }

    const {
      incomeList: { income },
    } = this.props;

    const receivedAmount = this.props.incomeList
      .map(income => income.amount)
      .reduce((acc, currentValue) => acc + currentValue);

    const {
      outerStyle, midTextStyle, receivedAmountStyle,
      itemStyle, dateStyle, flexEndStyle,
    } = styles;

    return (
      <View style={outerStyle}>
        <StyledText size='large' weight>Income</StyledText>
        <StyledText style={dateStyle}>This month (1st June '18 - 18th October '18)</StyledText>
        <View style={receivedAmountStyle}>
          <StyledText style={midTextStyle}>Received so far</StyledText>
          <View style={flexEndStyle}>
            <StyledText size='large' weight>£</StyledText>
            <StyledText size='large' weight>{receivedAmount}</StyledText>
          </View>
        </View>
        <FlatList
          data={this.props.incomeList}
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
    margin: 5,
    marginTop: 20,
    paddingHorizontal: 10,
    paddigVertical: 20,
  },
  receivedAmountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: 15,
    marginTop: 40,
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
  incomeList: state.income.list,
});

export default connect(mapStateToProps)(Income);

Income.propTypes = {
  incomeList: PropTypes.func,
}
