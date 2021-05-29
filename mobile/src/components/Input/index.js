import React, {forwardRef} from 'react';

import {MaterialIcons} from '@expo/vector-icons';
import {Container, TInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && (
        <MaterialIcons name={icon} size={20} color="#074885" />
      )}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
