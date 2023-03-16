/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useCallback, useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigation/AppNavigator';
import {theme} from './src/theme/theme';
import {useAtomValue, useSetAtom} from 'jotai';
import {userIdAtom, contactsAtom} from './src/atoms';
import {getContacts} from './src/firebase/useContacts';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  const userId = useAtomValue(userIdAtom);
  const setContacts = useSetAtom(contactsAtom);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const contacts = await getContacts(userId);
      setContacts(contacts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      {loading ? (
        <WelcomeScreen />
      ) : (
        <NavigationContainer>
          <AppTab />
        </NavigationContainer>
      )}
    </NativeBaseProvider>
  );
}
