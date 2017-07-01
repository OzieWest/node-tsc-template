import { ErrorRequestHandler, NextFunction } from 'express';
import * as httpErrors from 'http-errors';
import { IRequest, IRequestHandler, IResponse } from '../../types';

const notFound = (): IRequestHandler =>
  (req: IRequest, res: IResponse, next: NextFunction) => next(new httpErrors.NotFound());

const onError = (): ErrorRequestHandler =>
  (err: any, req: IRequest, res: IResponse, next: NextFunction) => {
    err.url = req.url;
    err.status = err.status || 500;

    const result = {
      error: {
        message: err.message,
        type: err.event || err.name || 'Unexpected Error',
      },
    };
    res.status(err.status);
    res.json(result);
  };

export { notFound, onError };
