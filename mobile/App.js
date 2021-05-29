import React from 'react';
import {StatusBar } from 'react-native';

import Routes from './src/routes'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#074885" barStyle="light-content"/>
    <Routes />
    </>
  )
}

export default App;