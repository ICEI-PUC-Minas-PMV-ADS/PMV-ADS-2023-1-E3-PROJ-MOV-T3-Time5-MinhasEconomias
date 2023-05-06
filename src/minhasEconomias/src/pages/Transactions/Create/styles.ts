/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
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
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    zIndex: 2,
  },
  avatarContainer: {
    backgroundColor: '#dcdcf4',
  },
  inputsContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },


});

export default styles;
