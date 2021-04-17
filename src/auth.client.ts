import axios from "axios";
import { API_ENVIRONMENT } from "./config";
export class AuthClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  async login(user: any) {
    let url = `${this.API_URL}v1/auth/login`;
    let response = await axios.post(url, user, { headers: this.headers });
    return response.data;
  }

  
  async register(user: any) {
    let url = `${this.API_URL}v1/auth/register`;
    let response = await axios.post(url, user, { headers: this.headers });
    return response.data;
  }

}
