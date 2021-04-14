var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_ENVIRONMENT } from "../config";
import axios from "axios";
import api from "../api";
import { of } from "rxjs";
export class CoachClient {
    constructor(config = {}) {
        this.getCoaches = () => {
            const response = api.get(this.url, { headers: this.headers });
            return of(response);
        };
        this.getCoach = (id) => {
            const response = api.get(`${this.url}/${id}`, { headers: this.headers });
            return of(response);
        };
        this.API_URL =
            config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
        this.url = `${this.API_URL}v1/coaches`;
    }
    addCoach(orgId, coach) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/coaches`;
            let response = yield axios.post(url, coach, { headers: this.headers });
            return response.data;
        });
    }
    deleteCoach(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/coaches/${id}`;
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
}
