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
exports.AuthClient = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
class AuthClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/auth/login`;
            let response = yield axios_1.default.post(url, user, { headers: this.headers });
            return response.data;
        });
    }
    adminLogin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/auth/adminlogin`;
            let response = yield axios_1.default.post(url, user, { headers: this.headers });
            return response.data;
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/auth/register`;
            let response = yield axios_1.default.post(url, user, { headers: this.headers });
            return response.data;
        });
    }
}
exports.AuthClient = AuthClient;
