import React from 'react';
import {Heading, Divider, Box} from 'native-base';

type Props = {
  text: string;
};

export default function AppHeading({text}: Props) {
  return (
    <Box px={2}>
      <Heading size="sm" my={1}>
        {text}
      </Heading>
      <Divider mb={2} />
    </Box>
  );
}
