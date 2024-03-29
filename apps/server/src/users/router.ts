import { NextFunction, Response, Router, Request } from 'express';
import { createNewUser } from './operations/create';

const usersRouter = Router();

usersRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    users: []
  });
});

usersRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const user = await createNewUser(req.body);
  res.status(200).json({
    user
  });
});

export default usersRouter;
