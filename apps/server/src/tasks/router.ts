import { NextFunction, Response, Router, Request } from 'express';
import { createNewTask } from './operations/create';
import { deleteTask } from './operations/delete';
import { findById } from './operations/findById';
import { listUserTasks } from './operations/list';
import { updateTask } from "./operations/update";

const tasksRouter = Router();

tasksRouter.get(
  '/:userId/tasks',
  async (req: Request<any, any, any>, res: Response, next: NextFunction) => {
    try {
      const { orderBy, priority, status, sortOrder } = req.query;
      const tasks = await listUserTasks(req.params.userId, {
        priority,
        status,
        sortOrder,
        orderBy
      });
      res.status(200).json({
        tasks
      });
    } catch (error) {
      next(error);
    }
  }
);

tasksRouter.get('/:taskId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await findById(req.params.taskId);
    res.status(200).json({
      task
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.delete('/:taskId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await deleteTask(req.params.taskId);
    res.status(200).json({
      task
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.put('/:taskId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await updateTask(req.params.taskId, req.body);
    res.status(201).json({
      task
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await createNewTask(req.body);
    res.status(201).json({
      task
    });
  } catch (error) {
    next(error);
  }
});

export default tasksRouter;
