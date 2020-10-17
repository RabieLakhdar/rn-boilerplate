import React from 'react';
import AreaView from 'components/atoms/AreaView';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import I18n from 'i18n';

const LoginScreen = ({navigation}) => (
  <AreaView>
    <Title>{`${I18n.t('greeting')} Screen: Login`}</Title>
    <Button onPress={() => navigation.navigate('Home')}>
      <Title>Go to home</Title>
    </Button>
  </AreaView>
);

export default LoginScreen;
