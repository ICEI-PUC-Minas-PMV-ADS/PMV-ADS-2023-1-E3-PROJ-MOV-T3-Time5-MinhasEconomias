import styled from 'styled-components/native';

interface InputProps {
  halfSize: boolean;
}

export const Container = styled.View<InputProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${props => (props.halfSize ? '40%' : '90%')};
  height: 72px;
  margin: 0 auto 24px;
  border-radius: 22px;
  box-shadow: 10px 5px 5px black;
`;

export const Text = styled.Text`
  margin-bottom: 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #452e4f;
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: 6px 14px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  text-align: left;
  color: #6c757d;
`;
