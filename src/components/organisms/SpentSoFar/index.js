import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StyledView from '../../atoms/StyledView';
import SpentDetails from './SpentDetails';

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttons: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderBottomWidth: 4,
    color: '#000',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  buttonsLabel: {
    fontSize: 20,
    color: '#000',
  },
  selectedButton: {
    backgroundColor: '#529FBE',
  },
  selectedButtonLabel: {
    color: '#fff'
  }
});
export default class SpentSoFar extends PureComponent {

  state = {
    selectedView: 'allSpending'
  }

  renderButtons = () => {
    const buttons = [
      {
        label: 'All',
        value: 'allSpending'
      },
      {
        label: 'Regular',
        value: 'regularSpending'
      },
      {
        label: 'Day to day',
        value: 'dayToDaySpending'
      },
    ]

    return buttons.map(item => {
      const selected = this.state.selectedView === item.value ? styles.selectedButton : '';
      const selectedLabel = this.state.selectedView === item.value ? styles.selectedButtonLabel : '';

      return (
        <TouchableOpacity
          key={item.label}
          style={[styles.buttons, selected]}
          onPress={() => this.setState({ selectedView: item.value })}
        >
          <Text style={[styles.buttonsLabel, selectedLabel]}>{item.label}</Text>
        </TouchableOpacity>
      )
    })

  }

  render() {

    return (
      <View style={{ flex: 1, padding: 20, justifyContent: 'flex-start' }}>
        <View style={{ paddingBottom: 20, marginVertical: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Spent so far</Text>
        </View>
        <StyledView style={styles.buttonsView}>
          {this.renderButtons()}
        </StyledView>
        <View style={{ flex: 6 }}>
          <SpentDetails selected={this.state.selectedView} />
        </View>
      </View>
    );
  }
}
