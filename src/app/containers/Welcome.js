import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styles/Welcome';

export class Welcome extends Component {
  handlePress() {
    this.props.triggerAction();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={['#4A148C', '#880E4F']} style={styles.container}>
          <View style={styles.welcome}>
            <Text style={[ styles.welcomeText, styles.textUI ]}>Sweatbook</Text>
          </View>
          <View style={ styles.triggerWrap }>
            <TouchableOpacity style={styles.actionTrigger} onPress={ this.handlePress.bind(this) }>
              <Text style={[ styles.triggerText, styles.textUI ]}>Start Workout</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
