import axios from "axios";
import { API_ENVIRONMENT, USER_API_URL } from "./config";
export class UserClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  static async list() {
    let url = `${USER_API_URL}v1/users?role=U`;
    let response = await axios.get(url);
    return response.data;
  }
}
