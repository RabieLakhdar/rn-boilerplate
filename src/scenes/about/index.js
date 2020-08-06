import React from 'react';
import AreaView from 'components/atoms/AreaView';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const AboutScreen = ({navigation}) => (
  <AreaView>
    <Title>Screen: About</Title>

    <Button onPress={() => navigation.navigate('Home')}>
      <Title>Go to home</Title>
    </Button>
  </AreaView>
);

export default AboutScreen;
