import {Box, Flex, Heading} from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';
import {SettingsMenuData} from '../data/settingsMenu';
import SettingsCard from '../components/SettingsCard';

const SettingsScreen = () => {
  return (
    <Box flex={1} py={3} background={Colors.bg}>
      <Flex direction="row" alignItems="center" justifyContent="center">
        <Feather name="settings" size={24} color={Colors.primary} />
        <Heading mx={2} mb={4}>
          Settings
        </Heading>
      </Flex>
      {SettingsMenuData.map((data, i) => (
        <SettingsCard
          key={i}
          title={data.title}
          description={data.description}
          icon={data.icon}
        />
      ))}
    </Box>
  );
};

export default SettingsScreen;
