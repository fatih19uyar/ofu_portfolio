import { atom } from 'jotai';

export const userAtom = atom({
  id: '',
  username: '',
  email: '',
  password: ''
});

export const themeAtom = atom('light');
