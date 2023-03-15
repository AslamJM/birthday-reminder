import firestore from '@react-native-firebase/firestore';

type AddContactInput = {
  name: string;
  dob: string;
  phone: string;
  email?: string;
};

export default async function addContact(input: AddContactInput) {
  await firestore()
    .collection('users/RJeexA94uVxuTqFP3VZs/contacts')
    .add(input);
}
