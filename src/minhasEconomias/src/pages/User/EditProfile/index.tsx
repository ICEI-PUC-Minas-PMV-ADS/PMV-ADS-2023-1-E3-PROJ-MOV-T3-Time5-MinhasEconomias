import React, { useEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './styles';

import api from '../../../services/axios';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import backicon from '../../../assets/backicon.png';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const EditProfile = () => {
  const { goBack } = useNavigation();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function fetchUser() {
      const user_id = await AsyncStorage.getItem('@user_id');
      const response = await api.get(`users/${user_id}`);

      setName(response.data.name);
      setLastname(response.data.lastname);
    }

    fetchUser();
  }, []);

  async function submit() {
    try {
      const user_id = await AsyncStorage.getItem('@user_id');
      const response = await api.put(`users/${user_id}`, {
        name,
        lastname,
        password,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  function handleBackButton() {
    goBack();
  }

  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handlePositivePress = () => {
    console.log('Positive value pressed');
  };

  const handleNegativePress = () => {
    console.log('Negative value pressed');
  };

  const handleChangeValue = (text) => {
    // Remove caracteres não numéricos
    const numericValue = text.replace(/[^0-9.]/g, '');
    setValue(parseFloat(numericValue));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <TouchableOpacity>
        style={styles.backButtonContainer}
        onPress={handleBackButton}>
        <Image source={backicon} />
      </TouchableOpacity>

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

      <View style={styles.containerRegister}>
        <Text style={styles.title}>Meus Registros</Text>
        <TouchableOpacity style={styles.menuIcon}>
          <MaterialIcons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>

          <Input
            title="Valor"
            placeholder="Digite o valor"
            value={value}
            onChangeText={setValue}
            keyboardType="numeric"
          />

          <Input
            style={[styles.input, styles.wideInput]}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.buttonRegister, styles.positiveButton]} onPress={handlePositivePress}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonRegister, styles.negativeButton]} onPress={handleNegativePress}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowIcon}>
          <MaterialIcons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
