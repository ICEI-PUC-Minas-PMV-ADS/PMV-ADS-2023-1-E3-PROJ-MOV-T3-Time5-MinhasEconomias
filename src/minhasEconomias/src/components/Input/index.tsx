import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, Text, InputContainer, Input} from './styles';

interface InputProps extends TextInputProps {
  title: string;
  halfSize?: boolean;
}

const Button = ({title, halfSize, ...rest}: InputProps) => {
  return (
    <Container halfSize={halfSize}>
      <Text>{title}</Text>

      <InputContainer>
        <Input {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Button;
