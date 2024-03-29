import { NextFunction, Response, Router, Request } from 'express';
import { listUserTasks } from './operations/list';

const tasksRouter = Router();

tasksRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await listUserTasks("1");
  res.status(200).json({
    tasks
  });
});

export default tasksRouter;
