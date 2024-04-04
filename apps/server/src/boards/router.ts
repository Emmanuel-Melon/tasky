import { NextFunction, Response, Router, Request } from 'express';
import { listUserBoards } from './operations/list';
import { createNewBoard, createNewList } from './operations/create';
import { findBoardById, findListById } from './operations/findById';

const tasksRouter = Router();

tasksRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const board = await createNewBoard(req.body);
    res.status(201).json({
      board
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.post('/lists', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await createNewList(req.body);
    res.status(201).json({
      list
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.get(
  '/:boardId/lists',
  async (req: Request<any, any, any>, res: Response, next: NextFunction) => {
    try {
      const { orderBy, priority, status, sortOrder } = req.query;
      const lists = await listUserBoards(req.params.userId, {
        priority,
        status,
        sortOrder,
        orderBy
      });
      res.status(200).json({
        lists
      });
    } catch (error) {
      next(error);
    }
  }
);

tasksRouter.get(
    '/:boardId',
    async (req: Request<any, any, any>, res: Response, next: NextFunction) => {
      try {
        const list = await findBoardById(req.params.boardId);
        res.status(200).json({
          list
        });
      } catch (error) {
        next(error);
      }
    }
  );


tasksRouter.get(
    '/lists/:listId',
    async (req: Request<any, any, any>, res: Response, next: NextFunction) => {
      try {
        const list = await findListById(req.params.listId);
        res.status(200).json({
          list
        });
      } catch (error) {
        next(error);
      }
    }
  );

export default tasksRouter;
