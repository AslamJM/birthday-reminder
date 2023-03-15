import {atom} from 'jotai';

export const loadingAtom = atom(false);
export const contactsAtom = atom<Contact[]>([]);
