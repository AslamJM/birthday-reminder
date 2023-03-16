import {Center, Image} from 'native-base';
import React from 'react';

const SettingsScreen = () => {
  return (
    <Center flex={1}>
      <Image source={require('../assets/cake.png')} alt="flash" />
    </Center>
  );
};

export default SettingsScreen;
