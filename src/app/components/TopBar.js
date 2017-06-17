import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TopBar = (props) => (
  <View style={[ styles.container, props.style ]}>
    { props.children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  }
});
