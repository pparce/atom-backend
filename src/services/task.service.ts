import { db } from '../config/firebase';
import { Task } from '../models/task.model';

const collection = db.collection('tasks');

export const getTasks = async (userId: string): Promise<Task[]> => {
    const snapshot = await collection.where('userId', '==', userId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
};

export const createTask = async (task: Task) => {
    const docRef = await collection.add(task);
    return { id: docRef.id, ...task };
};

export const updateTask = async (id: string, updates: Partial<Task>): Promise<Task | null> => {
    const docRef = collection.doc(id);
    await docRef.update(updates);
    const snap = await docRef.get();
    if (!snap.exists) return null;
    return { id: snap.id, ...(snap.data() as Task) };
};

export const deleteTask = async (id: string) => {
    await collection.doc(id).delete();
};
