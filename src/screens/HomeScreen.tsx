import React from 'react';
import {Box} from 'native-base';
import BirthdayCard from '../components/BirthdayCard';
import AppHeading from '../components/Heading';
import CalenderComponent from '../components/CalenderComponent';

import {contacts} from '../data/contacts';
import {useContacts} from '../firebase/useContacts';

export default function HomeScreen() {
  const {data} = useContacts();

  console.log(data);

  return (
    <Box>
      <CalenderComponent />
      <AppHeading text="Today" />
      {contacts.map(c => (
        <BirthdayCard key={c.id} contact={c} />
      ))}
    </Box>
  );
}
