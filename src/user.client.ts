import { API_ENVIRONMENT } from "./config";
import axios from "axios";
export class UserClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  

  async getUsers(orgId:string,role:string) {
    let url = `${this.API_URL}v1/users?role=${role}&org=${orgId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  
  async getUser(id:any) {
    let url = `${this.API_URL}v1/users/${id}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async addUser( category:any) {
    let url = `${this.API_URL}v1/categories`;
    let response = await axios.post(url,category, { headers: this.headers });
    return response.data;
  }

  async deleteCategory( id:any) {
    let url = `${this.API_URL}v1/categories/${id}`;
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }
}
