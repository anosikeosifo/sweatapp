import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TopBar } from '../components';
import { WorkoutList, NewExerciseModal } from '../components';
import { toggleExerciseModal, loadExercises } from '../actions/ExerciseActionCreators';
import { loadWorkouts, addWorkout } from '../actions/WorkoutActionCreators';

const mapDispatchToProps = (dispatch) => ({
  closeExerciseModal: () => dispatch(toggleExerciseModal(false)),
  openExerciseModal: () => dispatch(toggleExerciseModal(true)),
  addExerciseToWorkout: (name) => dispatch(addWorkout(name)),
  fetchExerciseList: () => dispatch(loadExercises()),
  fetchWorkoutList: () => dispatch(loadWorkouts())
});

const mapStateToProps = (state) => {
  return {
    exerciseModalVisibility: state.exerciseData.showModal,
    exerciseList: state.exerciseData.exercises,
    workoutList: state.workoutData.workouts,
  }
};

class NewWorkout extends Component {
  componentDidMount() {
    this.props.fetchWorkoutList();
    this.props.fetchExerciseList();
  }
  
  render() {
    return(
      <View style={ styles.container }>
        <TopBar style={ styles.topBar }>
          <Text style={ styles.topBarText }>New Workout</Text>
        </TopBar>

        <View style={ styles.workoutListContainer }>
          <WorkoutList showExerciseModal={ this.props.openExerciseModal } workouts={ this.props.workoutList }/>
          <NewExerciseModal
            visible={ this.props.exerciseModalVisibility }
            closeModal={ this.props.closeExerciseModal }
            exerciseListData={ this.props.exerciseList }
            addExercise={ this.props.addExerciseToWorkout } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topBar: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 20,
    paddingBottom: 10,
  },

  topBarText: {
    fontSize: 20,
    color: 'white',
  },

  workoutListContainer: {
    flex: 1,
  }
});

const ConnectedNewWorkout = connect(mapStateToProps, mapDispatchToProps)(NewWorkout);
export default ConnectedNewWorkout;
