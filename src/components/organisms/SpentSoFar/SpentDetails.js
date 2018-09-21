import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PieChart from 'react-native-pie-chart';
import AllSpentList from './AllSpentList';
import RegularSpentList from './RegularSpentList';
import DayToDaySpentList from './DayToDaySpentList';


class SpentDetails extends Component {
  render() {
    const data = this.props.spent[this.props.selected];
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
    const amounts = this.props.selected === 'allSpending'
      ? data.filter(item => item.title !== 'All').map(item => item.amount)
      : data.map(item => item.amount);
    let spendingList;

    if (this.props.selected === 'allSpending') {
      spendingList = <AllSpentList data={data} sliceColor={sliceColor} />;
    } else if (this.props.selected === 'regularSpending') {
      spendingList = <RegularSpentList data={data} sliceColor={sliceColor} />;
    } else {
      spendingList = <DayToDaySpentList data={data} sliceColor={sliceColor} />;
    }

    return (
      <View>
        <View style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginVertical: 50,
          alignSelf: 'stretch',
          width: '100%',
        }}>
          <PieChart
            chart_wh="200"
            series={amounts}
            sliceColor={sliceColor}
            doughnut
            coverRadius={0.65}
            coverFill="#eee"
            style={{ alignSelf: 'center' }}
          />
        </View>
        <View>
          {spendingList}
        </View>
      </View>
    )
  };
};

const mapsStateToProps = (state) => {
  return {
    spent: state.spending.data,
  };
};

export default connect(mapsStateToProps)(SpentDetails);