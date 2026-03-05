"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const version_resolver_1 = require("../../common/utils/version.resolver");
const environment_resolver_1 = require("../../common/utils/environment.resolver");
class HealthController {
    async getHealthStatus(_req, res, next) {
        try {
            const version = await (0, version_resolver_1.getServiceVersion)();
            const environment = await (0, environment_resolver_1.getServiceEnvironment)();
            res.status(200).json({
                success: true,
                health: 'Up! Grego se la morfa doblada',
                version,
                environment,
            });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.HealthController = HealthController;
