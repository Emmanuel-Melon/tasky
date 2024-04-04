import { NextFunction, Response, Router, Request } from 'express';
import { loginUser } from './operations/login';
import { registerUser } from './operations/register';

const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  const user = await loginUser(req.body);
  res.status(201).json({
    user
  });
});

authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const user = await registerUser(req.body);
  res.status(201).json({
    user
  });
});

export default authRouter;
