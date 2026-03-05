"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRouter = void 0;
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class IndexRouter {
    _router;
    constructor() {
        this._router = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        const routesPath = path_1.default.join(__dirname);
        const folders = fs_1.default
            .readdirSync(routesPath)
            .filter((file) => fs_1.default.statSync(path_1.default.join(routesPath, file)).isDirectory());
        folders.forEach((folder) => {
            const baseName = `${folder}.router`;
            const tsPath = path_1.default.join(routesPath, folder, `${baseName}.ts`);
            const jsPath = path_1.default.join(routesPath, folder, `${baseName}.js`);
            let filePath = '';
            if (fs_1.default.existsSync(tsPath)) {
                filePath = tsPath;
            }
            else if (fs_1.default.existsSync(jsPath)) {
                filePath = jsPath;
            }
            else {
                console.warn(`[⚠] No route file found for: ${folder}`);
                return;
            }
            try {
                const routeModule = require(filePath);
                const RouterClass = routeModule.default ||
                    Object.values(routeModule).find((e) => typeof e === 'function');
                if (RouterClass) {
                    const instance = new RouterClass();
                    this._router.use(`/${folder}`, instance.router);
                    console.log(`[✔] Route mounted: /${folder} → ${path_1.default.basename(filePath)}`);
                }
                else {
                    console.warn(`[⚠] No class exported in: ${filePath}`);
                }
            }
            catch (err) {
                console.error(`[❌] Failed to load router at: ${filePath}`);
                console.error(err);
            }
        });
    }
    get router() {
        return this._router;
    }
}
exports.IndexRouter = IndexRouter;
