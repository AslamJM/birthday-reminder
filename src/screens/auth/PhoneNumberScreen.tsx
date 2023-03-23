import {StackScreenProps} from '@react-navigation/stack';
import {FormControl, Input, Badge, Text, Button, Flex, Box} from 'native-base';
import {signInWithMobile} from '../../firebase/auth';
import React, {useState} from 'react';
import {useSetAtom} from 'jotai';
import {confirmationAtom} from '../../atoms';

type Props = StackScreenProps<AuthStackParamList, 'PhoneNumber'>;

const PhoneNumberScreen = ({navigation}: Props) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setConfirm = useSetAtom(confirmationAtom);

  const signInHandler = async () => {
    if (phone.length === 0) {
      setError('phone number cannotbe empty');
      return;
    }
    setLoading(true);
    try {
      const confirm = await signInWithMobile(`+94${phone}`);
      setConfirm(confirm);
      navigation.navigate('Otp');
    } catch (errorc: any) {
      setError(errorc.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Flex direction="row" px={3}>
        <FormControl flex={4}>
          <Input
            variant="outline"
            placeholder="Phone Number"
            fontSize={17}
            value={phone}
            onChangeText={setPhone}
            px={2}
            mx={1}
            keyboardType="numeric"
            InputLeftElement={
              <Badge>
                <Text fontSize={17}>+94</Text>
              </Badge>
            }
          />
          <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
        </FormControl>

        <Button
          flex={1}
          mx={1}
          isLoading={loading}
          isLoadingText="Sending.."
          onPress={signInHandler}>
          Sign In
        </Button>
      </Flex>
    </Box>
  );
};

export default PhoneNumberScreen;
