import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RegisterButtonContainer = styled.View`
    position: absolute;
    top: 32px;
    left: 70%;
    width: 100%;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 100px;
    height: 32px;
`;

export const RegisterButtonText = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #452E4F;
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
    color: #452E4F;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    margin-top: 16px;
`;

export const ForgotPasswordText = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #452E4F;
`;