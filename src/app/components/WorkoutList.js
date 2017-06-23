import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from '../utilities/Icon';
import { ADD_ICON } from '../utilities/constants';

export class WorkoutList extends Component {
  constructor() {
    super();
    this.workouts = [];
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.insructionText }>{ "Your exercise list is still empty" }</Text>
        <Button style={ styles.addExerciseBtn }
          onPress={ this.props.showExerciseModal }>
          <Text>Add an exercise</Text>
        </Button>
      </View>
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
  }
});
