var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { NODE_API_ENVIRONMENT } from "./config";
export class ProjectClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV"
                ? NODE_API_ENVIRONMENT.DEV
                : NODE_API_ENVIRONMENT.PROD;
    }
    getMyProjects(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/projects?userId=${userId}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/projects/${id}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/projects`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    createProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            //let createdBy = this.authService.getLoggedInUsername();
            //project["userId"] = createdBy;
            //project["createdBy"] = createdBy;
            let url = `${this.API_URL}v1/projects`;
            let response = yield axios.post(url, project, { headers: this.headers });
            return response.data;
        });
    }
    addProjectModule(projectId, module) {
        return __awaiter(this, void 0, void 0, function* () {
            //let createdBy = this.authService.getLoggedInUsername();
            //module["createdBy"] = createdBy;
            let url = `${this.API_URL}v1/projects/${projectId}/modules`;
            let response = yield axios.post(url, module, { headers: this.headers });
            return response.data;
        });
    }
    addProjectFeature(projectId, moduleId, feature) {
        return __awaiter(this, void 0, void 0, function* () {
            //let createdBy = this.authService.getLoggedInUsername();
            //feature["createdBy"] = createdBy;
            let url = `${this.API_URL}v1/projects/${projectId}/modules/${moduleId}/features`;
            let response = yield axios.post(url, feature, { headers: this.headers });
            return response.data;
        });
    }
    getProjectFeatures(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/projects/${projectId}/features`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getProjectModules(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/projects/${projectId}/modules`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getUserProjectFeatures(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/projectfeatures/search?userId=${userId}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
}
