/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddBirthdayScreen from '../screens/AddBirthdayScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';
import {Center, Text} from 'native-base';
import {getContacts} from '../firebase/useContacts';
import {contactsAtom, userIdAtom} from '../atoms';
import {useAtomValue, useSetAtom} from 'jotai';

type AppNavTabParamList = {
  Home: undefined;
  Add: undefined;
  Settings: undefined;
};

const BottomTabs = createBottomTabNavigator<AppNavTabParamList>();

export default function AppTab() {
  const [loading, setLoading] = useState(false);
  const setContacts = useSetAtom(contactsAtom);
  const userId = useAtomValue(userIdAtom);

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
    <>
      {loading ? (
        <Center flex={1}>
          <Text>Fetching contacts......</Text>
        </Center>
      ) : (
        <BottomTabs.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
          <BottomTabs.Screen
            name="Add"
            component={AddBirthdayScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <AntDesign
                  name="adduser"
                  size={24}
                  color={focused ? Colors.primary : 'black'}
                />
              ),
              tabBarLabel: ({focused}) => (
                <Text color={focused ? Colors.primary : 'black'} fontSize={12}>
                  Add
                </Text>
              ),
            }}
          />
          <BottomTabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? Colors.primary : 'black'}
                />
              ),
              tabBarLabel: ({focused}) => (
                <Text color={focused ? Colors.primary : 'black'} fontSize={12}>
                  Home
                </Text>
              ),
            }}
          />
          <BottomTabs.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Feather
                  name="settings"
                  size={24}
                  color={focused ? Colors.primary : 'black'}
                />
              ),
              tabBarLabel: ({focused}) => (
                <Text color={focused ? Colors.primary : 'black'} fontSize={12}>
                  Settings
                </Text>
              ),
            }}
          />
        </BottomTabs.Navigator>
      )}
    </>
  );
}
