"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./routes/index");
const error_middleware_1 = require("./middlewares/error/error.middleware");
const origins_config_1 = require("./common/config/origins/origins.config");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny', {
    skip: (req, _res) => {
        return req.originalUrl.startsWith('/api/health');
    },
}));
app.use((0, cors_1.default)({
    origin: (0, origins_config_1.getAllowedOrigins)(),
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', new index_1.IndexRouter().router);
app.use(error_middleware_1.errorMiddleware);
exports.default = app;
