import firestore from '@react-native-firebase/firestore';

type AddContactInput = {
  name: string;
  dob: string;
  phone: string;
  email?: string;
};

export default async function addContact(input: AddContactInput) {
  const res = await firestore()
    .collection('users/RJeexA94uVxuTqFP3VZs/contacts')
    .add(input);
  return res;
}

export async function deleteContact(id: string, userId: string) {
  const res = await firestore()
    .collection(`users/${userId}/contacts`)
    .doc(id)
    .delete();
  return res;
}

export async function updateContact(
  id: string,
  userId: string,
  input: Partial<Contact>,
) {
  const res = await firestore()
    .collection(`users/${userId}/contacts`)
    .doc(id)
    .update({
      ...input,
    });

  return res;
}
