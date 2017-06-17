import { StyleSheet, Dimensions } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },

  welcome: {
    marginBottom: 80,
  },

  textUI: {
    color: '#333',
  },

  welcomeText: {
    backgroundColor: 'transparent',
    fontSize: 20,
  },

  triggerWrap: {
    marginTop: 80,
  },

  actionTrigger: {
    width: deviceWidth/2,
    borderWidth: 1,
    borderColor: '#ffa600',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    marginBottom: 5,
  },

  triggerText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  }
});
