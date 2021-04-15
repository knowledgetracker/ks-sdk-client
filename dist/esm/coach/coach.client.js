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
import { AxiosWrapper } from "../api";
import { from } from "rxjs";
export class CoachClient {
    constructor(environment = 'DEV', orgId, accessToken) {
        this.getCoaches = () => {
            const response = this.axiosWrapper.get('v1/coaches');
            return from(response);
        };
        this.getCoach = (id) => {
            const response = this.axiosWrapper.get(`v1/coaches/${id}`);
            return from(response);
        };
        this.addCoach = (coach) => {
            let response = this.axiosWrapper.post(`v1/coaches`, coach);
            return from(response);
        };
        let apiUrl = environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
        this.axiosWrapper = new AxiosWrapper(apiUrl, orgId, accessToken);
    }
    deleteCoach(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.axiosWrapper.deleteR(`v1/coaches`, id);
            return from(response);
        });
    }
}
