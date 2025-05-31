import { db } from '../config/firebase';
import { User } from '../models/user.model';

const collection = db.collection('users');

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const snapshot = await collection.where('email', '==', email).get();
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as User;
};

export const createUser = async (email: string): Promise<User> => {
    const ref = await collection.add({ email });
    return { id: ref.id, email };
};
