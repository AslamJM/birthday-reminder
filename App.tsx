import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigation/AppNavigator';
import {Colors} from './src/theme/colors';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Box bg={Colors.bg} flex={1}>
          <AppTab />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
