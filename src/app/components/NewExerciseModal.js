import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from 'apsl-react-native-button';
import { ExerciseList } from './ExerciseList';
import {TopBar} from './TopBar';
import { SearchBar } from './SearchBar';

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
            <View style={styles.container}>
              <SearchBar style={ styles.searchBar } onTextInput={ this.handleSearchInput.bind } />
              <TouchableOpacity onPress={ this.props.closeModal } style={ styles.closeModalTrigger }>
                <Text style={ styles.closeModalTriggerIcon }>x</Text>
              </TouchableOpacity>
            </View>
          </TopBar>

          <ExerciseList exercises={ this.props.exerciseListData }/>
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

  closeModalTrigger: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeModalTriggerIcon: {
    fontSize: 25,
    color: '#333',
  },

  searchBar: {
    flex: 0.9,
    height: 50,
  },
});
