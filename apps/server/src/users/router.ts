import { NextFunction, Response, Router, Request } from 'express';
const usersRouter = Router();

usersRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    users: []
  });
});

export default usersRouter;
