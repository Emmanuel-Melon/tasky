import { NextFunction, Response, Router, Request } from 'express';
import { createNewTask } from './operations/create';
import { deleteTask } from "./operations/delete";
import { listUserTasks } from './operations/list';

const tasksRouter = Router();

tasksRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await listUserTasks("1");
  res.status(200).json({
    tasks
  });
});

tasksRouter.delete('/:taskId', async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await deleteTask(req.params.taskId);
  res.status(200).json({
    tasks
  });
});

tasksRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const task = await createNewTask(req.body);
  res.status(200).json({
    task
  });
});

export default tasksRouter;
