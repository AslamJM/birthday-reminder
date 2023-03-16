import {Text, Box, Flex, IconButton, Spinner} from 'native-base';
import React, {useState} from 'react';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';
import {deleteContact} from '../firebase/addContact';
import {getContacts} from '../firebase/useContacts';
import {userIdAtom, contactsAtom} from '../atoms';
import {useAtomValue, useSetAtom} from 'jotai';

type Props = {
  contact: Contact;
};

const ContactCard = ({contact}: Props) => {
  const userId = useAtomValue(userIdAtom);
  const setContacts = useSetAtom(contactsAtom);
  const [loading, setLoading] = useState(false);

  const deleteContactHandler = async () => {
    try {
      setLoading(true);
      await deleteContact(contact.id, userId);
      const contacts = await getContacts(userId);
      setContacts(contacts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      mx={2}
      my={1}
      borderRadius={8}
      px={2}
      bg="white"
      direction="row"
      alignItems="center"
      justifyContent="space-between">
      <Box p={3} flex={2}>
        <Text fontSize={13} bold>
          {contact.name}
        </Text>

        <Text fontSize={13} color="coolGray.500">
          {dayjs(contact.dob).format('DD, MMMM')}
        </Text>
      </Box>
      <Box p={3} flex={2}>
        <Text fontSize={13}>{contact.phone}</Text>
        <Text fontSize={13}>{contact.email}</Text>
      </Box>
      <Flex direction="row" flex={1} pr={2}>
        <IconButton
          icon={<Feather name="edit" color={Colors.primary} size={20} />}
          borderRadius="full"
        />
        {loading ? (
          <Spinner />
        ) : (
          <IconButton
            icon={<Feather name="trash" color={Colors.primary} size={20} />}
            borderRadius="full"
            onPress={() => deleteContactHandler()}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default ContactCard;
