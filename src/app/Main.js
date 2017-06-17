import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {Home} from './components';
import {Welcome} from './containers';
import SweatAppStore from './SweatAppStore';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      workoutStarted: false,
    };
  }

  startWorkout() {
    this.setState({
      workoutStarted: true,
    });
  }

  render() {
    return this.renderRoot((this.state.workoutStarted) ? Home : Welcome)
  }

  renderRoot(RootComponent) {
    return(
      <Provider store={ SweatAppStore }>
        <RootComponent triggerAction={ this.startWorkout.bind(this) } />
      </Provider>
    );
  }
}
