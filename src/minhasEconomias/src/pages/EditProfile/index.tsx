import React, {useEffect, useState} from 'react';
import {Avatar} from 'react-native-elements';
import {ScrollView, Text, View} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';

import api from '../../services/axios';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  picture_url: string;
}

const EditProfile = () => {
  const {navigate} = useNavigation();
  const [user, setUser] = useState<User>();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  async function submit() {
    try {
      const response = await api.post('teachers', {
        name,
        lastname,
        password,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchUser() {
      const user_id = await AsyncStorage.getItem('@user_id');
      const response = await api.get(`users/:${user_id}`);

      setName(response.data.name);
      setLastname(response.data.lastname);

      setUser(response.data);
    }

    fetchUser();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.profileContainer}>
        <Avatar
          size="xlarge" // tamanho do Avatar
          rounded // Avatar em formato de círculo
          icon={{
            name: 'user',
            type: 'font-awesome',
            size: 80,
            color: '#444cb4',
          }} // ícone do Avatar
          overlayContainerStyle={styles.avatarContainer} // cor de fundo do Avatar
        />
      </View>

      <Input
        title="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={value => setName(value)}
      />

      <Input
        title="Sobrenome"
        placeholder="Digite seu sobrenome"
        value={lastname}
        onChangeText={value => setLastname(value)}
      />

      <Input
        title="Senha"
        placeholder="Digite sua senha"
        onChangeText={value => setPassword(value)}
      />

      <View style={styles.buttonsContainer}>
        <Button text="Salvar" color="purple" halfSize={true} onPress={submit} />
        <Button
          text="Excluir Conta"
          halfSize={true}
          color="red"
          onPress={submit}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
