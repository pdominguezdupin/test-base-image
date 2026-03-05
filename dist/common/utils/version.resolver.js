"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceVersion = void 0;
const pjson = require('../../../package.json');
const getServiceVersion = () => {
    return pjson['version'];
};
exports.getServiceVersion = getServiceVersion;
