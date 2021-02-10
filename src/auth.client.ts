import axios from "axios";
import { API_ENVIRONMENT, USER_API_URL } from "./config";
export class AuthClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    console.log(this.headers);
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  async login(user: any) {
    let url = `${USER_API_URL}v1/users?role=U`;
    let response = await axios.post(url, user);
    return response.data;
  }
}
