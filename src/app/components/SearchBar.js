import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export const SearchBar = (props) => {
  return (
    <View style={props.style}>
      <TextInput
        style={styles.searchInput}
        value={ props.searchTerm }
        onChange={ props.onTextInput }/>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    margin: 0,
    height: 50,
  },
});
