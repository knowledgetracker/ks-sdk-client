"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClient = exports.CourseClient = exports.API = void 0;
const api_js_1 = require("./api.js");
Object.defineProperty(exports, "API", { enumerable: true, get: function () { return api_js_1.API; } });
const course_client_1 = require("./course.client");
Object.defineProperty(exports, "CourseClient", { enumerable: true, get: function () { return course_client_1.CourseClient; } });
const user_client_1 = require("./user.client");
Object.defineProperty(exports, "UserClient", { enumerable: true, get: function () { return user_client_1.UserClient; } });
