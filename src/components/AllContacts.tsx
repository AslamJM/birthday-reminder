import {Box, FlatList} from 'native-base';
import AppHeading from './Heading';
import React from 'react';
import {useAtomValue} from 'jotai';
import {contactsAtom} from '../atoms';
import ContactCard from './ContactCard';

const AllContacts = () => {
  const contacts = useAtomValue(contactsAtom);

  return (
    <Box>
      <AppHeading text="All Contacts" />
      <FlatList
        data={contacts}
        renderItem={({item}) => <ContactCard contact={item} />}
      />
    </Box>
  );
};

export default AllContacts;
