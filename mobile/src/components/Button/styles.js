import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background-color: #3b93ff;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  flex: 1;
  padding-top: 10px;
  color: #fff;
  font-size: 20px;
`;
