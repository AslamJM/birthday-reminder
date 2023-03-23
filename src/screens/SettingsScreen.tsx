import {Box, Flex, Heading} from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/colors';
import {SettingsMenuData} from '../data/settingsMenu';
import SettingsCard from '../components/SettingsCard';
import {useSetAtom} from 'jotai';
import {modalOpen, modelTypeAtom} from '../atoms';
import ConsentModal from '../components/ConsentModal';

const SettingsScreen = () => {
  const setModalOpen = useSetAtom(modalOpen);
  const setModalType = useSetAtom(modelTypeAtom);

  const logout = async () => {
    setModalType('logout');
    setModalOpen(true);
  };

  const deleteAccount = async () => {
    setModalType('delete');
    setModalOpen(true);
  };

  const rateApp = async () => {
    console.log('rate 5');
  };
  const shareApp = async () => {
    console.log('share on fb');
  };

  const functions = [logout, deleteAccount, rateApp, shareApp];

  return (
    <Box flex={1} py={3} background={Colors.bg}>
      <ConsentModal />
      <Flex direction="row" alignItems="center" justifyContent="center" mb={8}>
        <Feather name="settings" size={24} color={Colors.primary} />
        <Heading mx={2}>Settings</Heading>
      </Flex>
      {SettingsMenuData.map((data, i) => (
        <SettingsCard
          key={i}
          title={data.title}
          description={data.description}
          icon={data.icon}
          onPress={functions[i]}
        />
      ))}
    </Box>
  );
};

export default SettingsScreen;
