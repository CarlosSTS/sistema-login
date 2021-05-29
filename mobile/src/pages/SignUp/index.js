import React, {useRef, useState} from 'react';
import {Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

function SignUp() {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {  
  
    if(userName === '' || email === '' || password === '') {
      return Alert.alert('Aviso', 'Verifique se preencheu todos os seus dados')
    }
    setLoading(true)
    try {
      const response = await api.post('/user',{ userName,email,password })
       navigation.navigate('Dashboard',response.data.userName)
       Alert.alert(`Seu cadastro foi um sucesso ${response.data.userName}.`)
      
    } catch(err) {
      Alert.alert('Sentimos muito', 'tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  
  return (
    <>
      <Container>

        <Form>
        <FormInput
            icon="account-circle"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={setuserName}
            value={userName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setEmail}
            value={email}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit(email, password)}
            onChangeText={setPassword}
            value={password}
          />
          
          <SubmitButton
            loading={loading}
            onPress={() => handleSubmit(email, password)}>
            Cadastrar
          </SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <SignLinkText>Voltar para login</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}
export default SignUp;
