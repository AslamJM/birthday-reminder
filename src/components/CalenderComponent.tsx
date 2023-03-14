/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box} from 'native-base';

import {Calendar} from 'react-native-calendars';

export default function CalenderComponent() {
  return (
    <Box p={1} mb={2}>
      <Calendar style={{borderRadius: 8}} />
    </Box>
  );
}
