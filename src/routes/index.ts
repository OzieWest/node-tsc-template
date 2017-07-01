import { Router } from 'express';
import { managementRouter } from './management';

const routes = (): Router => {
  const router = Router();
  router.use(managementRouter(Router()));
  return router;
};

export { routes };
