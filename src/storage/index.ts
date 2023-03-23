import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('user', value);
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async () => {
  return await AsyncStorage.getItem('user');
};
