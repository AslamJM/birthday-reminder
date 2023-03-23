import {Box, Flex, Text} from 'native-base';
import React from 'react';
import {Colors} from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  title: string;
  description?: string;
  icon: string;
  onPress?: () => void;
};

const SettingsCard = ({title, description, icon}: Props) => {
  return (
    <Box
      bg={Colors.white}
      mx={4}
      my={1}
      height={70}
      px={2}
      py={2}
      borderRadius="md">
      <Flex direction="row" alignItems="center">
        <MaterialCommunityIcons name={icon} size={32} color={Colors.primary} />
        <Box ml={2}>
          <Text bold>{title}</Text>
          <Text color="blueGray.400">{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SettingsCard;
