var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_ENVIRONMENT } from "./config";
import axios from "axios";
export class CategoryClient {
    constructor(config = {}) {
        this.COURSE_SERVER_URL = "https://coursetracker-courses.s3.ap-south-1.amazonaws.com/spinsoft";
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/categories`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/categories/${id}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    addCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/categories`;
            let response = yield axios.post(url, category, { headers: this.headers });
            return response.data;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/categories/${id}`;
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
}
