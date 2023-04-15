import styled from 'styled-components/native';

interface ButtonProps {
  color: 'purple' | 'red';
  halfSize: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.halfSize ? '40%' : '90%')};
  height: 55px;
  padding: 8px;
  margin: 16px auto 0;
  background: ${props => (props.color === 'purple' ? '#444cb4' : '#dc2c04')};

  box-shadow: 10px 5px 5px black;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${props => (props.color === 'purple' ? '#FFF' : '#FFF')};
`;

export const ButtonContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
`;

export const ExpenseName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ExpenseValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
