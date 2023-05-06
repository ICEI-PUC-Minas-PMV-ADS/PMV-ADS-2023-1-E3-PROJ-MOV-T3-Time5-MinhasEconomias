/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import {
  ButtonContainer,
  ExpenseName,
  ExpenseValue,
} from '../../components/Button/styles';
import Button from '../../components/Button';

const Home = () => {
  const {navigate} = useNavigation();

  const [selectedOption, setSelectedOption] = useState(3);
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    async function fetchMovimentacoes() {
      const user_id = await AsyncStorage.getItem('@user_id');
      console.log(`user_id: ${user_id}`);
    }

    fetchMovimentacoes();
  }, []);

  const handleOptionPress = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  //TODO: substituir por chamada na fake API
  const options = [
    {label: 'Jan', value: 'jan'},
    {label: 'Fev', value: 'fev'},
    {label: 'Mar', value: 'mar'},
    {label: 'Abr', value: 'abr'},
  ];

  //TODO: substituir por chamada na fake API
  const expenses = [
    {name: 'Despesa 1', value: 100.0},
    {name: 'Despesa 2', value: 50.0},
    {name: 'Despesa 3', value: 75.0},
    {name: 'Despesa 4', value: 120.0},
    {name: 'Despesa 5', value: 85.0},
    {name: 'Despesa 6', value: 60.0},
    {name: 'Despesa 7', value: 110.0},
  ];

  const balanceTitle = showBalance ? 'Saldo Atual' : 'Saldo Oculto';
  const balanceValue = showBalance ? 'R$ 1.000,00' : '---';

  // Função que retorna a cor de fundo do botão, com base no índice
  const getButtonColor = (index: number) => {
    return index % 2 === 0 ? 'purple' : 'white';
  };

  function navigateToCreatePage() {
    navigate('MovementsCreate' as never);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar
          size="medium" // tamanho do Avatar
          rounded // Avatar em formato de círculo
          icon={{
            name: 'user',
            type: 'font-awesome',
            size: 30,
            color: '#444cb4',
          }} // ícone do Avatar
          onPress={() => navigate('EditProfile' as never)}
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
        <EvilIcons size={50} name="calendar" />
      </View>

      <View style={styles.amountContainer}>
        <View style={styles.saldoContainer}>
          <Text style={styles.balanceTitle}>{balanceTitle}</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceValue}>{balanceValue}</Text>
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowBalance(!showBalance)}>
            <FeatherIcons size={40} name={showBalance ? 'eye' : 'eye-off'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView style={{maxHeight: 350, overflow: 'scroll'}}>
        {expenses.map((expense, index) => {
          return (
            <ButtonContainer halfSize={false} key={index} color={getButtonColor(index)}>
              <ExpenseName color={getButtonColor(index)}>
                {expense.name}
              </ExpenseName>
              <ExpenseValue color={getButtonColor(index)}>
                {showBalance ? `RS ${expense.value.toFixed(2)}` : '****'}
              </ExpenseValue>
            </ButtonContainer>
          );
        })}
      </ScrollView>

      <Button
          text="Adicionar"
          color="purple"
          halfSize={false}
          onPress={navigateToCreatePage}
        />
    </View>
  );
};

export default Home;
