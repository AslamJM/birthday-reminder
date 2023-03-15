import {Text, Box, Flex, IconButton} from 'native-base';
import React from 'react';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';

type Props = {
  contact: Contact;
};

const ContactCard = ({contact}: Props) => {
  return (
    <Flex
      mx={3}
      my={1}
      borderRadius={8}
      px={2}
      bg="white"
      direction="row"
      alignItems="center"
      justifyContent="space-between">
      <Box p={3}>
        <Text fontSize={16}>{contact.name}</Text>

        <Text fontSize={14} color="coolGray.500">
          {dayjs(contact.dob).format('DD, MMMM')}
        </Text>
      </Box>
      <Box p={3}>
        <Text fontSize={14}>{contact.phone}</Text>
        <Text fontSize={14}>{contact.email}</Text>
      </Box>
      <Flex direction="row">
        <IconButton
          icon={<Feather name="edit" color={Colors.primary} size={22} />}
          borderRadius="full"
        />
        <IconButton
          icon={<Feather name="trash" color={Colors.primary} size={22} />}
          borderRadius="full"
        />
      </Flex>
    </Flex>
  );
};

export default ContactCard;
