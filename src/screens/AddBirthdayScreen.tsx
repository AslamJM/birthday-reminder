import React from 'react';
import {SafeAreaView} from 'react-native';
import {editModeAtom} from '../atoms';

import BirthdayForm from '../components/BirthdayInputForm';
import UpdateContactForm from '../components/EditContactForm';
import AllContacts from '../components/AllContacts';
import {useAtomValue} from 'jotai';

const AddBirthdayScreen = () => {
  const editMode = useAtomValue(editModeAtom);

  return (
    <SafeAreaView>
      {editMode ? <UpdateContactForm /> : <BirthdayForm />}
      <AllContacts />
    </SafeAreaView>
  );
};

export default AddBirthdayScreen;
