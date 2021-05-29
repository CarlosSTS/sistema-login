import React from 'react';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import screenOptions from '../constants/screenOptions';

import SignIn from '../pages/SignIn'; 
import SignUp from '../pages/SignUp'; 
import Dashboard from '../pages/Dashboard'; 

const Stack = createStackNavigator();

function Routes(){

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>

        <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{ title: 'LOGIN'}}
        />
        <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{ title: 'CADASTRO' }}
        />
        <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={({route}) => ({
           title: `BEM-VINDO ${route.params}`.toUpperCase(),
           headerRight: () => {
            const {navigate} = useNavigation();
             return(
              <MaterialCommunityIcons
                style={{marginRight: 16}}
                name="login"
                size={30}
                color="#3d9"
                onPress={() => navigate('SignIn')}
              />
          )},
           headerLeft: () => null
           })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;