import { User } from "./user.model";

export interface Task {
  id?: string;
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
  user: User;
}