import { NextFunction, Request, RequestHandler, Response } from 'express';

interface IDictionary<T> {
  [index: string]: T;
}

interface IResponse extends Response {
  // extend
}

interface IRequest extends Request {
  // extend
}

interface IRequestHandler extends RequestHandler {
  (req: IRequest, res: IResponse, next: NextFunction): any;
}

export {
  IDictionary,
  IRequest,
  IResponse,
  IRequestHandler,
};
