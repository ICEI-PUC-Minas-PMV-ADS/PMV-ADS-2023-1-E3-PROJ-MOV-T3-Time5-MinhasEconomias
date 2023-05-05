/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  avatarContainer: {
    backgroundColor: '#dcdcf4',
  },

  container: {
    flexDirection: 'column',
  },

  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    paddingTop: 35,
    paddingBottom: 30,
  },

  text: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },

  input: {
    marginLeft: 20,
    marginRight: 20,
  },

  text1: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  inputContainer: {
    marginTop: 120,
    marginLeft: 20,
    marginRight: 20,
  },

  button: {
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: '#414BB2',
  },
  title: {
    margin: 32,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: '#452e4f',
  },
});

export default styles;
