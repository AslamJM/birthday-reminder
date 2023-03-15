import React from 'react';
import {HStack, Spinner, Heading} from 'native-base';

const Loading = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner />
      <Heading fontSize="md">Loading</Heading>
    </HStack>
  );
};

export default Loading;
