import { StyleSheet } from 'react-native';

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
    alignItems: 'center',
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
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerRegister: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 20,
    top: 35,
    left: 20,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: '110%',
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  buttonRegister: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positiveButton: {
    backgroundColor: '#4caf50',
  },
  negativeButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  registerButton: {
    backgroundColor: '#5882FA',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#ffff',
    fontSize: 15,
  },
});

export default styles;
