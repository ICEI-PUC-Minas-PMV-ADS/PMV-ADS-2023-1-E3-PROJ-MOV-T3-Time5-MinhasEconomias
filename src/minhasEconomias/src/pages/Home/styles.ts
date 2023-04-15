import {StyleSheet} from 'react-native';

const optionButtonStyles = {
  backgroundColor: '#f5f5f5',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderWidth: 1,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: '#444cb4',
  width: 70,
};

const styles = StyleSheet.create({
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    ...optionButtonStyles,
  },
  optionButtonRadiusCentrais: {
    ...optionButtonStyles,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  optionButtonRadiusRight: {
    ...optionButtonStyles,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderLeftWidth: 0,
    borderRightWidth: 1,
  },
  optionButtonRadiusLeft: {
    ...optionButtonStyles,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderLeftWidth: 1,
    borderRightWidth: 0,
  },
  selectedOptionButton: {
    backgroundColor: '#444cb4',
  },
  optionButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
  },
  selectedOptionButtonText: {
    color: '#fff',
  },
  amountContainer: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  balanceContainer: {
    paddingLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  saldoContainer: {
    paddingLeft: 15,
    flexDirection: 'row',
  },
  balanceTitle: {
    fontSize: 10,
    color: '#666',
    marginRight: 5,
  },
  balanceValue: {
    fontSize: 20,
    color: '#333',
  },
  balanceLine: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  line: {
    height: 2,
    backgroundColor: '#343434',
  },
});

export default styles;
