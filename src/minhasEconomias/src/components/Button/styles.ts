import styled from 'styled-components/native';

interface ButtonProps {
    color: 'gray' | 'white';
    halfSize: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.halfSize ? '40%' : '90%' };
    height: 55px;
    padding: 8px;
    margin: 16px auto 0;
    background: ${props => props.color === 'gray' ? '#444cb4' : '#444cb4'};
    
    box-shadow: 10px 5px 5px black;
`;

export const ButtonText = styled.Text<ButtonProps>`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: ${props => props.color === 'gray' ? '#FFF' : '#452E4F'};
`;