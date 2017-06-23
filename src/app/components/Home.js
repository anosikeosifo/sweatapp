import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { NewWorkout } from '../containers';
import { styles } from '../styles/Home';

export const Home = () => {
  return(
    <TabView tabBarPosition='overlayBottom'
      tabBarUnderlineStyle={styles.tabUnderline }
      tabBarActiveTextColor='teal'
      tabBarBackgroundColor='transparent'>
        <NewWorkout tabLabel="+"/>
        <LinearGradient tabLabel='Stats' style={ styles.tabView } colors={['blue', '#fafafa']}>
          <View style={ styles.statsView }>
            <Text style={[ styles.welcomeText, styles.textUI ]}>Welcome</Text>
          </View>
        </LinearGradient>
        <View tabLabel='Motivate'></View>
    </TabView>
  );
}
