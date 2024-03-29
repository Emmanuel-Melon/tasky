import { NextFunction, Response, Router, Request } from 'express';
const tasksRouter = Router();

tasksRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    tasks: []
  });
});

export default tasksRouter;
