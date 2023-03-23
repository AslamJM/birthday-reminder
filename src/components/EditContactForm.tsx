import {
  Box,
  Heading,
  Input,
  Flex,
  FormControl,
  Spacer,
  Button,
  useToast,
  Badge,
  Text,
} from 'native-base';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, {useState} from 'react';
import {Colors} from '../theme/colors';
import {updateContact} from '../firebase/addContact';
import {getContacts} from '../firebase/useContacts';

import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {
  contactsAtom,
  userIdAtom,
  editModeAtom,
  selectedContactAtom,
} from '../atoms';

const UpdateContactForm = () => {
  //selected contact
  const [contact, setContact] = useAtom(selectedContactAtom);

  const flnames = contact!.name.split(' ');

  // date picker state
  const [date, setDate] = useState<Date | null>(new Date(contact!.dob));
  const [pdate, setPdate] = useState(new Date(contact!.dob));
  const [show, setShow] = useState(false);

  //form states
  const [fname, setFname] = useState(flnames[0]);
  const [lname, setLname] = useState(flnames[1] ?? '');
  const [phone, setPhone] = useState(contact!.phone);
  const [mail, setMail] = useState(contact!.email ?? '');

  //jotai
  const [loading, setLoading] = useState(false);
  const setContacts = useSetAtom(contactsAtom);
  const userId = useAtomValue(userIdAtom);
  const setEdit = useSetAtom(editModeAtom);

  const toast = useToast();

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

  const handleSubmit = async () => {
    setLoading(true);
    const input = {
      name: fname + ' ' + lname,
      dob: date?.toISOString()!,
      phone: '+94' + phone.startsWith('0') ? phone.slice(1, -1) : phone,
      email: mail,
    };
    try {
      await updateContact(contact!.id, userId, input);
      const contacts = await getContacts(userId);

      setContacts(contacts);

      toast.show({description: 'contact updated'});
    } catch (error: any) {
      toast.show({description: error.message});
    } finally {
      setEdit(false);
      setContact(null);
      setLoading(false);
    }
  };

  return (
    <Box px={3} mb={4}>
      <Heading textAlign="center" size="md" my={1}>
        Update Contact
      </Heading>
      <Flex direction="row" justifyContent="center" my={3}>
        <Box width="49%">
          <FormControl isRequired>
            <Input
              variant="underlined"
              placeholder="First Name"
              fontSize={15}
              value={fname}
              onChangeText={setFname}
              px={2}
            />
            <FormControl.ErrorMessage>
              First name is required
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Spacer />
        <Box width="49%">
          <FormControl>
            <Input
              variant="underlined"
              placeholder="Last Name"
              fontSize={15}
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
          fontSize={15}
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
            fontSize={15}
            value={phone}
            onChangeText={setPhone}
            px={2}
            InputLeftElement={
              <Badge>
                <Text fontSize={15}>+94</Text>
              </Badge>
            }
          />
          <FormControl.ErrorMessage>
            Phone number is required
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Box mb={3}>
        <FormControl isRequired>
          <Input
            variant="underlined"
            placeholder="E-Mail (optional)"
            fontSize={15}
            value={mail}
            onChangeText={setMail}
            px={2}
          />
        </FormControl>
      </Box>
      <Box mt={2}>
        <Button
          fontSize={20}
          onPress={() => handleSubmit()}
          disabled={fname.length === 0 || phone.length === 0 || !date}
          isLoading={loading}
          isLoadingText="Updating...">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateContactForm;
