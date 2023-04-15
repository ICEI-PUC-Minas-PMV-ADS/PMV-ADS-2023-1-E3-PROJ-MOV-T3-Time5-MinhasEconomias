import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: '#dcdcf4',
  },
  avatarIcon: {
    backgroundColor: '#dcdcf4',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#ccc',
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