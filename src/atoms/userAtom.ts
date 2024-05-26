import { atom } from 'jotai';

interface User {
  username: string;
  password: string;
}

export const userAtom = atom<User | null>(null);
