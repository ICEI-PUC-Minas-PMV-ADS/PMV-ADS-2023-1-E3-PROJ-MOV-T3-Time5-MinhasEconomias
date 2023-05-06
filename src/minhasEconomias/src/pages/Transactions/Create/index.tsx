/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import backicon from '../../../assets/backicon.png';

const MovementsCreate = () => {
    const {goBack} = useNavigation();
    const {navigate} = useNavigation();

  const [valor, setValor] = useState('');
  const [description, setDescription] = useState('');

  async function submit() {
    try {
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  function handleBackButton() {
    goBack();
  }

  return (
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.title}>Transação</Text>
        </View>

        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={handleBackButton}>
            <Image source={backicon} />
          </TouchableOpacity>

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
        <View style={styles.inputsContainer}>
          <Input
            title="Valor"
            placeholder="R$ 100,00"
            value={valor}
            onChangeText={value => setValor(value)}
          />


          <Input
            title="Descrição"
            placeholder="Exemplo: Tênis Novo ou Salário"
            value={description}
            onChangeText={value => setDescription(value)}
          />
        </View>
        <View style={styles.buttonsContainer}>
        <Button  text="Adicionar" color="purple" onPress={submit} />
        </View>
      </ScrollView>
  );
};

export default MovementsCreate;
