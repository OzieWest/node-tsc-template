import { Router } from 'express';
import { IRequest, IResponse } from '../../types';

const managementRouter = (router: Router): Router => {
  router.get('/management/health', (req: IRequest, res: IResponse) => {
    const config = req.app.get('config');
    res.json({
      status: 'UP',
      started_at: config.startTime,
    });
  });
  return router;
};

export { managementRouter };
