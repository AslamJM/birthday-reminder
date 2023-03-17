import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Center} from 'native-base';

const OtpScreen = () => {
  return (
    <Center>
      <OTPInputView pinCount={6} />
    </Center>
  );
};

export default OtpScreen;
