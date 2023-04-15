import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

import styles from './styles';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = optionIndex => {
    setSelectedOption(optionIndex);
  };

  const options = [
    {label: 'Jan', value: 'option1'},
    {label: 'Fev', value: 'option2'},
    {label: 'Mar', value: 'option3'},
    {label: 'Abr', value: 'option4'},
  ];

  return (
    <View >
      <TouchableOpacity>
        <Avatar
          size="medium" // tamanho do Avatar
          rounded // Avatar em formato de círculo
          icon={{
            name: 'user',
            type: 'font-awesome',
            size: 30,
            color: '#444cb4',
          }} // ícone do Avatar
          overlayContainerStyle={styles.avatarContainer} // cor de fundo do Avatar
        />
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.optionButton,
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
      </View>
    </View>
  );
};

export default Home;
