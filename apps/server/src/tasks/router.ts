import { NextFunction, Response, Router, Request } from 'express';
import { createNewTask } from './operations/create';
import { deleteTask } from "./operations/delete";
import { findById } from './operations/findById';
import { listUserTasks } from './operations/list';

const tasksRouter = Router();

tasksRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const { filter } = req.query;
  console.log("query", filter);
  const tasks = await listUserTasks("1", {
    filter
  });
  res.status(200).json({
    tasks
  });
});

tasksRouter.get('/:taskId', async (req: Request, res: Response, next: NextFunction) => {
  const task = await findById(req.params.taskId);
  res.status(200).json({
    task
  });
});

tasksRouter.delete('/:taskId', async (req: Request, res: Response, next: NextFunction) => {
  const task = await deleteTask(req.params.taskId);
  res.status(200).json({
    task
  });
});

tasksRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const task = await createNewTask(req.body);
  res.status(201).json({
    task
  });
});

export default tasksRouter;
