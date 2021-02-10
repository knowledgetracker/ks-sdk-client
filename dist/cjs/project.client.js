"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectClient = void 0;
const config_1 = require("./config");
class ProjectClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        console.log(this.headers);
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
    }
}
exports.ProjectClient = ProjectClient;
