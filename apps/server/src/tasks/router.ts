import { NextFunction, Response, Router, Request } from 'express';
import { createNewTask } from './operations/create';
import { listUserTasks } from './operations/list';

const tasksRouter = Router();

tasksRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await listUserTasks("1");
  res.status(200).json({
    tasks
  });
});

tasksRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await createNewTask(req.body);
  res.status(200).json({
    tasks
  });
});

export default tasksRouter;
