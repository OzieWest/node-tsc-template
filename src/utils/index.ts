import { logger } from './logger';

const stringify = (data: any): string => {
  if (data instanceof Error) {
    return JSON.stringify(data, Object.getOwnPropertyNames(data));
  }
  return JSON.stringify(data);
};

export { logger, stringify };
