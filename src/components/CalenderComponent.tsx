/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box} from 'native-base';

import {Calendar} from 'react-native-calendars';
import {Colors} from '../theme/colors';

type Props = {
  markedDates: string[];
};

export default function CalenderComponent({markedDates}: Props) {
  let markedDateObj: Record<string, any> = {};
  markedDates.forEach(date => {
    markedDateObj[date] = {marked: true, dotColor: Colors.primary};
  });
  return (
    <Box p={1} mb={2}>
      <Calendar style={{borderRadius: 8}} markedDates={markedDateObj} />
    </Box>
  );
}
