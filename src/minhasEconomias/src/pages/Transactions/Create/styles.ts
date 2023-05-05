import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
    position: 'absolute',
    top: 15,
    left: 20,
    marginVertical: 10,
    marginHorizontal: 320,
    zIndex: 2,
  },
  avatarContainer: {
    backgroundColor: '#dcdcf4',
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    margin: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 15,
    left: 20,
    marginVertical: 24,
    marginHorizontal: 0,
    zIndex: 2,
  },
});

export default styles;
