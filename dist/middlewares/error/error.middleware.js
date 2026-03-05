"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, _next) => {
    console.error(err);
    const statusError = err.statusError ||
        err.statusCode ||
        err.status ||
        req.statusCode ||
        req.statusError ||
        500;
    const isProduction = process.env.ENVIRONMENT === 'production';
    res.status(statusError).json({
        success: false,
        message: isProduction && statusError === 500
            ? 'Internal server error'
            : err.message,
    });
};
exports.errorMiddleware = errorMiddleware;
