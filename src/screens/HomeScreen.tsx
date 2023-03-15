import React from 'react';
import {FlatList} from 'native-base';
import {Box} from 'native-base';
import BirthdayCard from '../components/BirthdayCard';
import AppHeading from '../components/Heading';
import CalenderComponent from '../components/CalenderComponent';

import {useContacts} from '../firebase/useContacts';

export default function HomeScreen() {
  const {data} = useContacts();

  console.log(data);

  return (
    <Box>
      <CalenderComponent />
      <AppHeading text="Today" />
      <FlatList
        data={data}
        renderItem={({item}) => <BirthdayCard contact={item} />}
      />
    </Box>
  );
}
