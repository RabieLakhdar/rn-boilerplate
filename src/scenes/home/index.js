import React from 'react';
import AreaFragement from 'components/atoms/AreaFragement';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const HomeScreen = ({navigation}) => (
  <AreaFragement>
    <Title>Screen: Home</Title>

    <Button onPress={() => navigation.navigate('About')}>
      <Title>Go to About</Title>
    </Button>
  </AreaFragement>
);

export default HomeScreen;
