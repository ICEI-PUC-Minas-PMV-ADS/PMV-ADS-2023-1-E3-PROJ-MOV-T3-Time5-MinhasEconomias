/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './styles';
import api from '../../../services/axios';

import {useNavigation} from '@react-navigation/native';

import backicon from '../../../assets/backicon.png';

import AsyncStorage from '@react-native-community/async-storage';

const MovementsCreate = () => {
  const {goBack} = useNavigation();
  const {navigate} = useNavigation();

  const [valueMovement, setValueMovement] = useState('');
  const [description, setDescription] = useState('');

  async function submit() {
    try {
      if (!description || !valueMovement) {
        return;
      }

      const user_id = await AsyncStorage.getItem('@user_id');
      const response = await api.post('movements', {
        description,
        value: valueMovement,
        date: new Date().toLocaleDateString(),
        movementType: 'Receita',
        idUser: user_id,
        active: true,
      });
      console.log(response);
      navigate('Home' as never);
    } catch (err) {
      console.log(err);
    }
  }

  function handleBackButton() {
    goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Transação</Text>

      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={handleBackButton}>
        <Image source={backicon} />
      </TouchableOpacity>

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

      <Input
        title="Descrição"
        placeholder="Exemplo: Tênis Novo ou Salário"
        value={description}
        onChangeText={value => setDescription(value)}
      />

      <Input
        title="Valor"
        placeholder="R$ 100,00"
        value={valueMovement}
        onChangeText={value => setValueMovement(value)}
      />

      <Button text="Adicionar" color="purple" onPress={submit} />
    </ScrollView>
  );
};

export default MovementsCreate;
