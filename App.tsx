import React, {useState} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigation/AppNavigator';
import {Colors} from './src/theme/colors';
import {theme} from './src/theme/theme';
import {useAtomValue, useSetAtom} from 'jotai';
import {userIdAtom, contactsAtom} from './src/atoms';
import {getContacts} from './src/firebase/useContacts';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  const userId = useAtomValue(userIdAtom);
  const setContacts = useSetAtom(contactsAtom);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const contacts = await getContacts(userId);
      setContacts(contacts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  getData();

  return (
    <NativeBaseProvider theme={theme}>
      <Box bg={Colors.bg} flex={1}>
        {loading ? (
          <WelcomeScreen />
        ) : (
          <NavigationContainer>
            <AppTab />
          </NavigationContainer>
        )}
      </Box>
    </NativeBaseProvider>
  );
}
