import { db } from '../config/firebase';
import { Task } from '../models/task.model';

const collection = db.collection('tasks');

export const getTasks = async (userId: string): Promise<Task[]> => {
  const snapshot = await collection.where('userId', '==', userId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
};

export const createTask = async (task: Task) => {
  await collection.add(task);
};

export const updateTask = async (id: string, updates: Partial<Task>) => {
  await collection.doc(id).update(updates);
};

export const deleteTask = async (id: string) => {
  await collection.doc(id).delete();
};
