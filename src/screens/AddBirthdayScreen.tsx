import React from 'react';
import {Box} from 'native-base';
import BirthdayForm from '../components/BirthdayInputForm';
import AllContacts from '../components/AllContacts';

const AddBirthdayScreen = () => {
  return (
    <Box>
      <BirthdayForm />
      <AllContacts />
    </Box>
  );
};

export default AddBirthdayScreen;
