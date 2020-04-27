import React from 'react';
import AreaFragement from 'components/atoms/AreaFragement';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const LoginScreen = ({navigation}) => (
  <AreaFragement>
    <Title>Screen: Login</Title>

    <Button onPress={() => navigation.navigate('Home')}>
      <Title>Go to home</Title>
    </Button>
  </AreaFragement>
);

export default LoginScreen;
