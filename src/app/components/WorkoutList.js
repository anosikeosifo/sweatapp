import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableWithoutFeedback} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from '../utilities/Icon';
import { ADD_ICON } from '../utilities/constants';

export class WorkoutList extends Component {
  constructor(props) {
    super(props);
    const listDataSource = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 != r2 });

    this.state = {
      dataSource: listDataSource.cloneWithRows(props.workouts)
    }
  }

  renderListItem(props, workout) {
    return(
      <TouchableWithoutFeedback>
        <View style={ styles.listItem }>
          <Text>{ workout.name }</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderListFooter() {
    return(
      <View style={ styles.container }>
        <Button style={ styles.addExerciseBtn }
          onPress={ this.props.showExerciseModal }>
          <Text>Add an exercise</Text>
        </Button>
      </View>
    );
  }

  render() {
    return(
      <ListView
       dataSource={ this.state.dataSource.cloneWithRows(this.props.workouts) }
       renderRow={ (workout) => (
         this.renderListItem(this.props, workout)
       )}
       renderFooter={ () => this.renderListFooter() }/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  insructionText: {
    fontSize: 20,
  },

  addExerciseBtn: {
    marginTop: 50
  },

  listItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
