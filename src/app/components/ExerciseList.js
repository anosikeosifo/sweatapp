import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text, TouchableWithoutFeedback } from 'react-native';

export class ExerciseList extends Component {

  constructor(props) {
    super(props);
    const listDataSource = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 != r2 });

    this.state = {
      dataSource: listDataSource.cloneWithRows(props.exercises)
    }
  }

  renderListItem(props, exercise) {
    return(
      <TouchableWithoutFeedback onPress={ () => props.handleItemSelect(exercise.name) }>
        <View style={ styles.listItem }>
          <Text>{ exercise.name }</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <ListView
       dataSource={ this.state.dataSource.cloneWithRows(this.props.exercises) }
       renderRow={ (exercise) => (
         this.renderListItem(this.props, exercise)
       )}/>
    );
  }
}
  //access the list of workouts from props

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  listItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
