import { atom } from 'jotai';

interface Register {
    userName: string;
    phoneNumber: number;
    password: string;
    rePassword: string;
}

export const registerAtom = atom<Register | null>(null);
