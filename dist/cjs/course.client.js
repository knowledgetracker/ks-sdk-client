"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseClient = void 0;
const config_1 = require("./config");
class CourseClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        console.log(this.headers);
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
    }
    listCourses() {
        return ["Java"];
    }
}
exports.CourseClient = CourseClient;
