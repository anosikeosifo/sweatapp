import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';

export const WorkoutList = (props) => {

  //access the list of workouts from props
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{ "Add a new exercise" }</Text>
      <Button style={ styles.addExerciseBtn }
        onPress={ this.props.addNewExercise }>
        <Icon svgPath={ ADD_ICON } />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
