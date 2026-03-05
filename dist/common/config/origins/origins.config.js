"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllowedOrigins = void 0;
const getAllowedOrigins = () => {
    let origins = process.env.CORS_ALLOWED_ORIGINS || 'http://localhost:3098';
    origins = origins
        .split('\n')
        .join('')
        .split('\r')
        .join('')
        .split(' ')
        .join('');
    return origins.split(',');
};
exports.getAllowedOrigins = getAllowedOrigins;
