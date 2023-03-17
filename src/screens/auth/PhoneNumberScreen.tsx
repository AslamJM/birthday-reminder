import {StackScreenProps} from '@react-navigation/stack';
import {
  Center,
  FormControl,
  Input,
  Badge,
  Text,
  Button,
  Flex,
  Spacer,
} from 'native-base';
import React, {useState} from 'react';

type Props = StackScreenProps<AuthStackParamList, 'PhoneNumber'>;

const PhoneNumberScreen = ({navigation}: Props) => {
  const [phone, setPhone] = useState('');
  return (
    <Center>
      <Flex direction="row">
        <FormControl>
          <Input
            variant="outline"
            placeholder="Phone Number"
            fontSize={15}
            value={phone}
            onChangeText={setPhone}
            px={2}
            InputLeftElement={
              <Badge>
                <Text fontSize={15}>+94</Text>
              </Badge>
            }
          />
        </FormControl>
        <Spacer />
        <Button>Sign In</Button>
      </Flex>
    </Center>
  );
};

export default PhoneNumberScreen;
