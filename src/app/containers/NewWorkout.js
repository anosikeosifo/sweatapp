import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TopBar } from '../components';
import { WorkoutList, NewExerciseModal } from '../components';
import { toggleExerciseModal } from '../actions/ExerciseActionCreators';

const mapDispatchToProps = (dispatch) => ({
  closeExerciseModal: () => dispatch(toggleExerciseModal(false)),
  openExerciseModal: () => dispatch(toggleExerciseModal(true)),
});

const mapStateToProps = (state) => {
  return {
    exerciseModalVisibility: state.exerciseData.showModal,
    exerciseList: state.exerciseData.exercises,
  }
};

class NewWorkout extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <TopBar style={ styles.topBar }>
          <Text style={ styles.topBarText }>New Workout</Text>
        </TopBar>

        <View style={ styles.workoutListContainer }>
          <WorkoutList showExerciseModal={ this.props.openExerciseModal }/>
          <NewExerciseModal
            visible={ this.props.exerciseModalVisibility }
            closeModal={ this.props.closeExerciseModal }
            exerciseListData={ this.props.exerciseList } />
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
