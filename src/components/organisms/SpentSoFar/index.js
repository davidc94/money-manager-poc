import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PieChart from '../PieChart';
import StyledView from '../../atoms/StyledView';

export default class SpentSoFar extends PureComponent {
  render() {
    return (
      <StyledView>
        <Text>Spent So Far</Text>
        <PieChart />
      </StyledView>
    );
  }
}
