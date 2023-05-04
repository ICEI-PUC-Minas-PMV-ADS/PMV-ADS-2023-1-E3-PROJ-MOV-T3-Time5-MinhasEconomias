import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonContainer = styled.View`
  position: absolute;
  top: 32px;
  left: 78%;
  width: 100%;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 65px;
  height: 32px;
`;

export const LoginButtonText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #452e4f;
`;

export const Title = styled.Text`
  width: 300px;
  margin-bottom: 64px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #452e4f;
`;

export const InputsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
