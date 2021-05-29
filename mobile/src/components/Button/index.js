import React from 'react';

import {ActivityIndicator} from 'react-native';

import {Container, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}
