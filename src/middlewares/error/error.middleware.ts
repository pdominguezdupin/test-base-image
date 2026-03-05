import { NextFunction, Response, Request } from 'express';
export const errorMiddleware = (
  err: any,
  req: Request | any,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);
  const statusError: number =
    err.statusError ||
    err.statusCode ||
    err.status ||
    req.statusCode ||
    req.statusError ||
    500;
  const isProduction = process.env.ENVIRONMENT === 'production';
  res.status(statusError).json({
    success: false,
    message:
      isProduction && statusError === 500
        ? 'Internal server error'
        : err.message,
  });
};
