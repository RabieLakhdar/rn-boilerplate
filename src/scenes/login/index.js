import React from 'react';
import AreaView from 'components/atoms/AreaView';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const LoginScreen = ({navigation}) => (
  <AreaView>
    <Title>Screen: Login</Title>

    <Button onPress={() => navigation.navigate('Home')}>
      <Title>Go to home</Title>
    </Button>
  </AreaView>
);

export default LoginScreen;
