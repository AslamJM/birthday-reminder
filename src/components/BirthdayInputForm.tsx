import {
  Box,
  Heading,
  Input,
  Flex,
  FormControl,
  Spacer,
  Button,
} from 'native-base';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, {useState} from 'react';
import {Colors} from '../theme/colors';

const BirthdayForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [pdate, setPdate] = useState(new Date());
  const [show, setShow] = useState(false);

  //form states
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (!selectedDate) {
      return;
    } else {
      const currentDate = selectedDate;
      setShow(false);
      setPdate(currentDate);
      setDate(currentDate);
    }
  };

  return (
    <Box px={3}>
      <Heading textAlign="center" size="md" my={1}>
        Add Birthday
      </Heading>
      <Flex direction="row" justifyContent="center" my={3}>
        <Box width="49%">
          <FormControl isRequired>
            <Input
              variant="underlined"
              placeholder="First Name"
              fontSize={16}
              value={fname}
              onChangeText={setFname}
              px={2}
            />
          </FormControl>
        </Box>
        <Spacer />
        <Box width="49%">
          <FormControl isRequired>
            <Input
              variant="underlined"
              placeholder="Last Name"
              fontSize={16}
              value={lname}
              onChangeText={setLname}
              px={2}
            />
          </FormControl>
        </Box>
      </Flex>
      <Box mb={3}>
        <Input
          variant="underlined"
          placeholder="Date of Birth"
          value={date ? date.toDateString() : ''}
          fontSize={16}
          isDisabled
          px={2}
          rightElement={
            <MaterialCommunityIcons
              name="calendar-month"
              color={Colors.primary}
              size={24}
              onPress={() => setShow(true)}
            />
          }
        />
      </Box>
      {show && <DateTimePicker value={pdate} onChange={onChange} />}
      <Box mb={3}>
        <FormControl isRequired>
          <Input
            variant="underlined"
            placeholder="Phone Number"
            fontSize={16}
            value={phone}
            onChangeText={setPhone}
            px={2}
          />
        </FormControl>
      </Box>
      <Box mb={3}>
        <FormControl isRequired>
          <Input
            variant="underlined"
            placeholder="E-Mail (optional)"
            fontSize={16}
            value={mail}
            onChangeText={setMail}
            px={2}
          />
        </FormControl>
      </Box>
      <Box mt={2}>
        <Button fontSize={20}>Add Birdthday</Button>
      </Box>
    </Box>
  );
};

export default BirthdayForm;
