"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClient = void 0;
const config_1 = require("./config");
const axios_1 = __importDefault(require("axios"));
class UserClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
    }
    getUsers(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/users?role=${role}`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/users/${id}`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    addUser(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/categories`;
            let response = yield axios_1.default.post(url, category, { headers: this.headers });
            return response.data;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/categories/${id}`;
            let response = yield axios_1.default.delete(url, { headers: this.headers });
            return response.data;
        });
    }
}
exports.UserClient = UserClient;
