import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from 'apsl-react-native-button';
import ExerciseList from './ExerciseList';
import {TopBar} from './TopBar';

export class NewExerciseModal extends Component {
  handleSearchInput() {

  }

  render() {
    return (
      <Modal
        animationType={ 'slide' }
        visible={ this.props.visible }
        onRequestClose={ this.props.closeModal }
        style={{ flex: 1 }}>

        <View>
          <TopBar style={ styles.topBar }>
            <View style={ styles.container }>
              <TextInput style={ styles.searchInput } />
            </View>
            <TouchableOpacity onPress={ this.props.closeModal } style={ styles.closeModalTrigger }>
              <Text style={ styles.closeModalTriggerIcon }>x</Text>
            </TouchableOpacity>
          </TopBar>
          <Text>This is Modal</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#ffa600',
    padding: 0,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchInput: {
    flex: 0.8,
    height: 50,
    margin: 0
  },

  closeModalTrigger: {
    flex: 0.2
  },

  closeModalTriggerIcon: {
    fontSize: 25,
    color: '#ccc',
  },
});
