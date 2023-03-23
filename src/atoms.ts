import {atom} from 'jotai';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const loadingAtom = atom(false);
export const contactsAtom = atom<Contact[]>([]);
export const userIdAtom = atom('');

export const confirmationAtom =
  atom<FirebaseAuthTypes.ConfirmationResult | null>(null);

// editing contacts
export const editModeAtom = atom(false);
export const selectedContactAtom = atom<Contact | null>(null);

//settings
export const modalOpen = atom(false);
export const consentAtom = atom(false);
export const modelTypeAtom = atom<'logout' | 'delete'>('logout');
