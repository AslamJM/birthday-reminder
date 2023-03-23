import {ScrollView} from 'native-base';
import AppHeading from './Heading';
import React from 'react';
import {useAtomValue} from 'jotai';
import {contactsAtom} from '../atoms';
import {Dimensions} from 'react-native';
import ContactCard from './ContactCard';

const AllContacts = () => {
  const contacts = useAtomValue(contactsAtom);

  const height = Dimensions.get('screen').height;

  return (
    <>
      <AppHeading text="All Contacts" />
      <ScrollView height={height * 0.4}>
        {contacts.map(c => (
          <ContactCard key={c.name} contact={c} />
        ))}
      </ScrollView>
    </>
  );
};

export default AllContacts;
