import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signInWithMobile = async (phone: string) => {
  return await auth().signInWithPhoneNumber(phone);
};

export const createUser = async (phone: string) => {
  const res = await firestore().collection('users').add({phone});
  return res.id;
};

export const getUser = async (phone: string) => {
  const res = await firestore()
    .collection('users')
    .where('phone', '==', phone)
    .get();
  return res.docs[0].id;
};

export const deleteUser = async (userId: string) => {
  const res = await firestore().collection('users').doc(userId).delete();
  return res;
};
