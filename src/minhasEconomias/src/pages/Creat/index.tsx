import React, {useEffect, useState} from 'react';
import {Avatar} from 'react-native-elements';
import {ScrollView, Text, View} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Style from '../Home/styles';

import api from '../../services/axios';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const Create = () => {
    const {navigate} = useNavigation();
  
    const [selectedOption, setSelectedOption] = useState(3);
      
    
  
    const handleOptionPress = (optionIndex: number) => {
      setSelectedOption(optionIndex);
    };
  
       
  
    return (
      <View style={Style.container}>
        <View style={Style.profileContainer}>
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
            overlayContainerStyle={Style.avatarContainer} // cor de fundo do Avatar
          />
        </View>
  
        <View style={Style.optionsContainer}>
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
              <ButtonContainer key={index} color={getButtonColor(index)}>
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
  
        <View style={styles.buttonsContainer}>
          <Button
            text="Adicionar"
            color="purple"
            halfSize={true}
            onPress={handleCadastraDespesaouLucro}
          />
          <Button
            text="Remover"
            halfSize={true}
            color="red"
            onPress={handleRemoveDespesaouLucro}
          />
        </View>
      </View>
    );
  };
  
  export default Create;
  