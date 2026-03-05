"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceEnvironment = void 0;
const getServiceEnvironment = () => {
    const serEnv = process.env.ENVIRONMENT || 'undefined';
    return serEnv.charAt(0).toUpperCase() + serEnv.slice(1);
};
exports.getServiceEnvironment = getServiceEnvironment;
