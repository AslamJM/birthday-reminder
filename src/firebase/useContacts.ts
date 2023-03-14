import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

export const useContacts = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await firestore()
          .collection('users/RJeexA94uVxuTqFP3VZs/contacts')
          .get();
        const contactArr = response.docs.map(doc => doc.data() as Contact);
        setData(contactArr);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return {data, error, loading};
};