import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopBar } from '../components';

export const NewWorkout = () => {
  return(
    <View style={ styles.container }>
      <TopBar style={ styles.topBar }>
        <Text style={ styles.topBarText }>New Workout</Text>
      </TopBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topBar: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems:'center',
  },

  topBarText: {
    fontSize: 20,
    color: 'white',
  },
});
