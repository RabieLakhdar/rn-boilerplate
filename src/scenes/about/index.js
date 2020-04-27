import React from 'react';
import AreaFragement from 'components/atoms/AreaFragement';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const AboutScreen = ({navigation}) => (
  <AreaFragement>
    <Title>Screen: About</Title>

    <Button onPress={() => navigation.navigate('Home')}>
      <Title>Go to home</Title>
    </Button>
  </AreaFragement>
);

export default AboutScreen;
