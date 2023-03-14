/* eslint-disable @typescript-eslint/no-unused-vars */
import firestore from '@react-native-firebase/firestore';
import {useAtom} from 'jotai';
import {loadingAtom} from '../atoms';

type AddContactInput = {
  name: string;
  dob: string;
  phone: string;
  email?: string;
};

export default async function useAddContact(input: AddContactInput) {
  const [loading, setLoading] = useAtom(loadingAtom);
  setLoading(true);
  await firestore()
    .collection('users/RJeexA94uVxuTqFP3VZs/contacts')
    .add(input);
  setLoading(false);
}
