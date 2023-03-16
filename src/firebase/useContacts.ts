import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {useSetAtom} from 'jotai';
import {contactsAtom} from '../atoms';

export const useContacts = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const setContacts = useSetAtom(contactsAtom);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await firestore()
          .collection('users/RJeexA94uVxuTqFP3VZs/contacts')
          .get();
        const contactArr = response.docs.map(doc => doc.data() as Contact);
        setData(contactArr);
        setContacts(contactArr);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {data, error, loading};
};

export async function getContacts(userId: string) {
  const response = await firestore()
    .collection(`users/${userId}/contacts`)
    .get();
  const contactArr = response.docs.map(
    doc => ({id: doc.id, ...doc.data()} as Contact),
  );
  return contactArr;
}
