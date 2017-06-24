import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from 'apsl-react-native-button';
import { ExerciseList } from './ExerciseList';
import {TopBar} from './TopBar';
import { SearchBar } from './SearchBar';

export class NewExerciseModal extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "Search for exercises"
    }
  }

  handleSearchInput(inputValue) {
    this.setState({ searchTerm: inputValue });
  }

  handleAddExercise(name) {
    this.props.addExercise(name);
    this.props.closeModal();
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
              <SearchBar searchTerm={ this.state.searchTerm } style={ styles.searchBar } onTextInput={ this.handleSearchInput.bind(this) } />
              <TouchableOpacity onPress={ this.props.closeModal } style={ styles.closeModalTrigger }>
                <Text style={ styles.closeModalTriggerIcon }>x</Text>
              </TouchableOpacity>
            </View>
          </TopBar>

          <ExerciseList exercises={ this.props.exerciseListData } handleItemSelect={ this.handleAddExercise.bind(this) }/>
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
