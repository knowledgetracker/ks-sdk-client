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
exports.CoachClient = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
const api_1 = __importDefault(require("../api"));
const rxjs_1 = require("rxjs");
class CoachClient {
    constructor(config = {}) {
        this.getCoaches = () => {
            const response = api_1.default.get(this.url, { headers: this.headers });
            return rxjs_1.from(response);
        };
        this.getCoach = (id) => {
            const response = api_1.default.get(`${this.url}/${id}`, { headers: this.headers });
            return rxjs_1.of(response);
        };
        this.addCoach = (coach) => {
            let url = `${this.API_URL}v1/coaches`;
            let response = api_1.default.post(url, coach, { headers: this.headers });
            return rxjs_1.of(response);
        };
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
        this.url = `${this.API_URL}v1/coaches`;
    }
    deleteCoach(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/coaches/${id}`;
            let response = yield axios_1.default.delete(url, { headers: this.headers });
            return response.data;
        });
    }
}
exports.CoachClient = CoachClient;
