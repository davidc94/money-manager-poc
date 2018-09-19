import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { FETCH_INCOME_DATA } from '../../../store/constants';

const styles = {
  outer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    margin: 2,
    padding: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'lightgray',
    margin: 10,
  }
};

class Income extends PureComponent {
  componentDidMount() {
    this.props.dispatch({ type: FETCH_INCOME_DATA });
  }

  render() {
    if (!this.props.incomeList) { return null; }

    const receivedAmount = this.props.incomeList.income
      .map(income => income.amount)
      .reduce((acc, currentValue) => acc + currentValue);

    const { outer, header } = styles;

    return (
      <View style={outer}>

        <View style={header}>
          <Text>Received so far</Text>
          <Text>{receivedAmount}</Text>
        </View>

        <FlatList
          data={this.props.incomeList.income}
          renderItem={({ item }) => (
            <View>
              <View>
                <Text>{item.date}</Text>
                <Text>{item.title}</Text>
              </View>
              <Text>{item.amount}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  incomeList: state.incomeReducers.incomeList,
});

export default connect(mapStateToProps)(Income);
