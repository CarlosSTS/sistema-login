import React from 'react';
import {useRoute} from '@react-navigation/native'
import { Text } from 'react-native';


const Dashboard = () => {
  const user = useRoute().params;
  
  return <Text>Bem-vindo {user}</Text>
}

export default Dashboard;