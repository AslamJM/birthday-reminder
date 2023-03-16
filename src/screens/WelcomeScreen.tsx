import {Center, Image} from 'native-base';

import React from 'react';

const WelcomeScreen = () => {
  return (
    <Center flex={1}>
      <Image source={require('../assets/cake.png')} alt="flash" />
    </Center>
  );
};

export default WelcomeScreen;
