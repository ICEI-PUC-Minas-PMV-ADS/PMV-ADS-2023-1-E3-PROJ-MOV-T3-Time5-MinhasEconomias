import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Keyboard} from 'react-native';
import api from '../../../services/axios';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  RegisterButtonContainer,
  RegisterButton,
  RegisterButtonText,
  Title,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';

export type RootStackParamList = {
  YourScreen: {id: string};
};

const Login = () => {
  const {navigate} = useNavigation();

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

  async function handleLogin() {
    if (!email || !password) {
      return;
    }

    try {
      const response = await api.post('sessions', {email, password});
      const {id} = response.data;
      await AsyncStorage.setItem('@user_id', `${id}`);
      console.log(response);
      navigate('Home' as never);
    } catch (error) {
      console.log(error);
    }
  }

  function navigateToRegisterPage() {
    navigate('Register' as never);
  }

  return (
    <Container>
      <RegisterButtonContainer>
        <RegisterButton onPress={navigateToRegisterPage}>
          <RegisterButtonText>Inscreva-se</RegisterButtonText>
        </RegisterButton>
      </RegisterButtonContainer>

      {isTitleVisible && <Title>Seja Bem-Vindo(a)!</Title>}

      <Input
        title="E-mail"
        placeholder="Digite seu email"
        onChangeText={value => setEmail(value)}
      />

      <Input
        title="Senha"
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />

      <Button text="Entrar" color="purple" onPress={handleLogin} />

      <ForgotPasswordButton>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPasswordButton>
    </Container>
  );
};

export default Login;
