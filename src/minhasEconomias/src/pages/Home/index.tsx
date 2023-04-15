import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

const Home = () => {
  const {navigate} = useNavigation();

  const [selectedOption, setSelectedOption] = useState(3);

  const handleOptionPress = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const options = [
    {label: 'Jan', value: 'jan'},
    {label: 'Fev', value: 'fev'},
    {label: 'Mar', value: 'mar'},
    {label: 'Abr', value: 'abr'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Avatar
          size="medium" // tamanho do Avatar
          rounded // Avatar em formato de círculo
          icon={{
            name: 'user',
            type: 'font-awesome',
            size: 30,
            color: '#444cb4',
          }} // ícone do Avatar
          onPress={() => navigate('Profile' as never)}
          overlayContainerStyle={styles.avatarContainer} // cor de fundo do Avatar
        />
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option.value}
            style={[
              options.length - 1 === index
                ? styles.optionButtonRadiusRight
                : index === 0
                ? styles.optionButtonRadiusLeft
                : styles.optionButtonRadiusCentrais,
              selectedOption === index && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionPress(index)}>
            <Text
              style={[
                styles.optionButtonText,
                selectedOption === index && styles.selectedOptionButtonText,
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
        <Icon size={50} name="calendar" />
      </View>
    </View>
  );
};

export default Home;
