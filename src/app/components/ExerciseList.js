import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text } from 'react-native';

export class ExerciseList extends Component {
  constructor(props) {
    super(props);
    const listDataSource = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 != r2 });

    this.state = {
      dataSource: listDataSource.cloneWithRows(props.exercises)
    }
  }

  render() {
    return (
      <ListView
       dataSource={ this.state.dataSource }
       renderRow={ (exercise) => (
         <View>
          <Text>{ exercise.name }</Text>
         </View>
       )}/>
    );
  }
}
  //access the list of workouts from props

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
