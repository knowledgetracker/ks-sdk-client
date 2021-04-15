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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachClient = void 0;
const config_1 = require("../config");
const api_1 = require("../api");
const rxjs_1 = require("rxjs");
class CoachClient {
    constructor(environment = 'DEV', orgId, accessToken) {
        this.getCoaches = () => {
            const response = this.axiosWrapper.get('v1/coaches');
            return rxjs_1.from(response);
        };
        this.getCoach = (id) => {
            const response = this.axiosWrapper.get(`v1/coaches/${id}`);
            return rxjs_1.from(response);
        };
        this.addCoach = (coach) => {
            let response = this.axiosWrapper.post(`v1/coaches`, coach);
            return rxjs_1.from(response);
        };
        let apiUrl = environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
        this.axiosWrapper = new api_1.AxiosWrapper(apiUrl, orgId, accessToken);
    }
    deleteCoach(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.axiosWrapper.deleteR(`v1/coaches`, id);
            return rxjs_1.from(response);
        });
    }
}
exports.CoachClient = CoachClient;
