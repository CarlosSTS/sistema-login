import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { expo } from "../../../app.json";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Footer,
} from "./styles";

function SignIn() {
  const navigation = useNavigation();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    if (!email || !password) {
      return Alert.alert("Aviso", "Verifique se preencheu todos os seus dados");
    }
    setLoading(true);
    try {
      const response = await api.post("/session", { email, password });
      navigation.navigate("Dashboard", response.data.userName);
    } catch (err) {
      Alert.alert("Sentimos muito", "tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
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
            onPress={() => handleSubmit(email, password)}
          >
            Acessar
          </SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
        <Footer>{expo.version}</Footer>
      </Container>
    </>
  );
}
export default SignIn;
