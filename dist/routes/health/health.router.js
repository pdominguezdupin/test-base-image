"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRouter = void 0;
const express_1 = require("express");
const health_controller_1 = require("../../controllers/health/health.controller");
class HealthRouter {
    router = (0, express_1.Router)();
    healthController = new health_controller_1.HealthController();
    constructor() {
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.healthController.getHealthStatus.bind(this.healthController));
    }
}
exports.HealthRouter = HealthRouter;
