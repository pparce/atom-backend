import { Request, Response } from 'express';
import * as TaskService from '../services/task.service';

export const getAll = async (req: Request, res: Response) => {
  const tasks = await TaskService.getTasks(req.params.userId);
  res.json(tasks);
};

export const create = async (req: Request, res: Response) => {
  let response = await TaskService.createTask(req.body);
  res.status(201).send(response);
};

export const update = async (req: Request, res: Response) => {
  let response = await TaskService.updateTask(req.params.id, req.body);
  res.status(204).send();
};

export const remove = async (req: Request, res: Response) => {
  await TaskService.deleteTask(req.params.id);
  res.status(204).send();
};
