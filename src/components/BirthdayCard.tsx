import {Text, Box, Flex, IconButton} from 'native-base';
import React from 'react';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';

type Props = {
  contact: Contact;
};

const BirthdayCard = ({contact}: Props) => {
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
      <Box p={3}>
        <Text fontSize={14} bold>
          {contact.name}
        </Text>

        <Text fontSize={13} color="coolGray.500">
          {dayjs(contact.dob).format('DD, MMMM')}
        </Text>
      </Box>
      <IconButton
        icon={<Feather name="gift" color={Colors.primary} size={22} />}
        borderRadius="full"
      />
    </Flex>
  );
};

export default BirthdayCard;
