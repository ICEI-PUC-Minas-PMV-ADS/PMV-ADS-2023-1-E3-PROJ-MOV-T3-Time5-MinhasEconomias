import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Keyboard} from 'react-native';
import api from '../../../services/axios';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  LoginButtonContainer,
  LoginButton,
  LoginButtonText,
  Title,
} from './styles';

const Register = () => {
  const {navigate, goBack} = useNavigation();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isTitleVisible, setIsTitleVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsTitleVisible(false);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsTitleVisible(true);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  async function handleCreateAccount() {
    if (!name || !lastname || !email || !password) {
      return;
    }

    try {
      const response = await api.post('users', {
        name,
        lastname,
        email,
        password,
      });
      const {id} = response.data;
      await AsyncStorage.setItem('@user_id', `${id}`);
      console.log(response);
      navigate('Home' as never);
    } catch (error) {
      if (error.response) {
        console.log('Server responded with status code:', error.response.status);
        console.log('Response data:', error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error creating request:', error.message);
      }
    }
  }

  function navigateToLoginPage() {
    goBack();
  }

  return (
    <Container>
      <LoginButtonContainer>
        <LoginButton onPress={navigateToLoginPage}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </LoginButtonContainer>

      {isTitleVisible && <Title>Inscreva-se</Title>}

      <Input
        title="Nome"
        placeholder="Digite seu nome"
        onChangeText={value => setName(value)}
      />

      <Input
        title="Sobrenome"
        placeholder="Digite seu sobrenome"
        onChangeText={value => setLastname(value)}
      />

      <Input
        title="E-mail"
        placeholder="Digite seu e-mail"
        onChangeText={value => setEmail(value)}
      />

      <Input
        title="Senha"
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />

      <Button
        text="Concluir cadastro"
        color="purple"
        onPress={handleCreateAccount}
      />
    </Container>
  );
};

export default Register;
