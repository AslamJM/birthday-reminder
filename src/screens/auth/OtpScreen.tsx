import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Box, Spinner, Text} from 'native-base';
import {Colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';
import {useAtomValue} from 'jotai';
import {confirmationAtom} from '../../atoms';
import {getUser, createUser} from '../../firebase/auth';
import {storeData} from '../../storage';
import {useSetAtom} from 'jotai';
import {userIdAtom} from '../../atoms';

const OtpScreen = () => {
  const confirm = useAtomValue(confirmationAtom);
  const [loading, setLoading] = useState(false);
  const setUser = useSetAtom(userIdAtom);

  const codeFilled = async (code: string) => {
    if (!confirm) {
      return;
    }
    setLoading(true);
    try {
      const credentials = await confirm.confirm(code);
      if (credentials) {
        const existingUser = await getUser(credentials.user!.phoneNumber!);
        if (existingUser) {
          await storeData(existingUser);
          setUser(existingUser);
        } else {
          const newUser = await createUser(credentials.user!.phoneNumber!);
          await storeData(newUser);
          setUser(newUser);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box px={5} flex={1}>
      {loading ? (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Spinner size="lg" />
          <Text>Confirming Code.....</Text>
        </Box>
      ) : (
        <OTPInputView
          pinCount={6}
          keyboardAppearance="default"
          codeInputFieldStyle={styles.boxStyle}
          onCodeFilled={code => codeFilled(code)}
        />
      )}
    </Box>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: '#f9f9f9',
    borderColor: Colors.primary,
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});
