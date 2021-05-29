import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #00a86b;
  border-radius: 4px;
  height: 40px;
`;

export const SignLinkText = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
  font-weight:bold;
  text-align: center;
  padding: 0 8px;
`;

export const Footer = styled.Text`
  margin-top: 10px;
  color: #737373;
  font-size: 16px;
  font-weight: bold;
`;
