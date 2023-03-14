import {Text, Box, Square, Flex} from 'native-base';
import React from 'react';
import dayjs from 'dayjs';

type Props = {
  contact: Contact;
};

const BirthdayCard = ({contact}: Props) => {
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

        <Text fontSize={14} color="coolGray.600">
          {dayjs(contact.dob).format('DD/MM/YYYY')}
        </Text>
      </Box>
      <Square height={50} width={50} bg="blue.400">
        Icons
      </Square>
    </Flex>
  );
};

export default BirthdayCard;
