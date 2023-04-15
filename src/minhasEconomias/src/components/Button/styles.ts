import styled from 'styled-components/native';

interface ButtonProps {
  color: 'purple' | 'red' | 'white';
  halfSize: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: {halfSize: boolean}) => (props.halfSize ? '40%' : '90%')};
  height: 55px;
  padding: 8px;
  margin: 16px auto 0;
  background: ${(props: {color: string}) =>
    props.color === 'purple'
      ? '#444cb4'
      : props.color === 'red'
      ? '#dc2c04'
      : '#fff'};

  box-shadow: 10px 5px 5px black;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${(props: {color: string}) =>
    props.color === 'purple' || props.color === 'red' ? '#FFF' : '#444cb4'};
`;

export const ButtonContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
`;

export const ExpenseName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props: {color: string}) =>
    props.color === 'purple' || props.color === 'red' ? '#FFF' : '#444cb4'};
`;

export const ExpenseValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props: {color: string}) =>
    props.color === 'purple' || props.color === 'red' ? '#FFF' : '#444cb4'};
`;
