import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddBirthdayScreen from '../screens/AddBirthdayScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';
import {Text} from 'native-base';

type AppNavTabParamList = {
  Home: undefined;
  Add: undefined;
  Settings: undefined;
};

const BottomTabs = createBottomTabNavigator<AppNavTabParamList>();

export default function AppTab() {
  return (
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
  );
}
