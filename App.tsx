/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useCallback, useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigation/AppNavigator';
import {theme} from './src/theme/theme';
import {useAtom} from 'jotai';
import {userIdAtom} from './src/atoms';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {getUserData} from './src/storage';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  const [userId, setUserId] = useAtom(userIdAtom);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const user = await getUserData();
      if (!user) {
        setUserId('');
      } else {
        setUserId(user);
      }
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
          {userId.length === 0 ? <AuthNavigator /> : <AppTab />}
        </NavigationContainer>
      )}
    </NativeBaseProvider>
  );
}
