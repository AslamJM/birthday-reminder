import React from 'react';
import {SafeAreaView} from 'react-native';

import BirthdayForm from '../components/BirthdayInputForm';
import AllContacts from '../components/AllContacts';

const AddBirthdayScreen = () => {
  return (
    <SafeAreaView>
      <BirthdayForm />
      <AllContacts />
    </SafeAreaView>
  );
};

export default AddBirthdayScreen;
