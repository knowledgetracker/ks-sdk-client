import axios from "axios";
import { API_ENVIRONMENT,  PROJECT_API_URL } from "./config";
export class ProjectClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV"
        ? PROJECT_API_URL.DEV
        : PROJECT_API_URL.PROD;
  }

  async getMyProjects(userId: string) {
    let url = `${this.API_URL}v1/projects?userId=${userId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getProject(id: any) {
    let url = `${this.API_URL}v1/projects/${id}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getProjects() {
    let url = `${this.API_URL}v1/projects`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async createProject(project: any) {
    //let createdBy = this.authService.getLoggedInUsername();
    //project["userId"] = createdBy;
    //project["createdBy"] = createdBy;
    let url = `${this.API_URL}v1/projects`;
    let response = await axios.post(url, project, { headers: this.headers });
    return response.data;
  }

  async addProjectModule(projectId: any, module: any) {
    //let createdBy = this.authService.getLoggedInUsername();
    //module["createdBy"] = createdBy;
    let url = `${this.API_URL}v1/projects/${projectId}/modules`;
    let response = await axios.post(url, module, { headers: this.headers });
    return response.data;
  }

  async addProjectFeature(projectId: any, moduleId: any, feature: any) {
    //let createdBy = this.authService.getLoggedInUsername();
    //feature["createdBy"] = createdBy;
    let url = `${this.API_URL}v1/projects/${projectId}/modules/${moduleId}/features`;
    let response = await axios.post(url, feature, { headers: this.headers });
    return response.data;
  }

  async getProjectFeatures(projectId: any) {
    let url = `${this.API_URL}v1/projects/${projectId}/features`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getProjectModules(projectId: any) {
    let url = `${this.API_URL}v1/projects/${projectId}/modules`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getUserProjectFeatures(userId: any) {
    let url = `${this.API_URL}v1/projectfeatures/search?userId=${userId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }
}
