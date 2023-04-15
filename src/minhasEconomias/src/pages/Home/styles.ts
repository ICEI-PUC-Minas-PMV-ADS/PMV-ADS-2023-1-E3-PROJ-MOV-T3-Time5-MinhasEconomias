import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: '#dcdcf4',
  },
  avatarIcon: {
    backgroundColor: '#dcdcf4',
  },
  container: {
    flexDirection: 'column',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#444cb4',
  },
  selectedOptionButton: {
    backgroundColor: '#444cb4',
  },
  optionButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  selectedOptionButtonText: {
    color: '#fff',
  },
});

export default styles;
