import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color: 'purple' | 'red' | 'white';
  text: string;
  halfSize?: boolean;
}

const Button = ({color, text, halfSize, ...rest}: ButtonProps) => {
  return (
    <Container color={color} halfSize={halfSize} {...rest}>
      <ButtonText color={color}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
