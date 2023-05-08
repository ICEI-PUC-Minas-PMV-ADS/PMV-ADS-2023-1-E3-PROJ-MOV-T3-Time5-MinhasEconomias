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

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

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
        title="Valor"
        placeholder="R$ 100,00"
        value={name}
        onChangeText={value => setName(value)}
      />

      <Input
        title="Descrição"
        placeholder="Exemplo: Tênis Novo ou Salário"
        value={lastname}
        onChangeText={value => setLastname(value)}
      />

      <Button text="Adicionar" color="purple" onPress={submit} />
    </ScrollView>
  );
};

export default MovementsCreate;
