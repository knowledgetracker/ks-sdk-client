import axios from "axios";
import { API_ENVIRONMENT, USER_API_URL } from "./config";
export class ProjectClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    console.log(this.headers);
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }
}
