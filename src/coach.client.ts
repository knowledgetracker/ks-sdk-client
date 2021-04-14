import { API_ENVIRONMENT } from "./config";
import axios from "axios";
export class CoachClient {
  headers: any;
  API_URL: string;
  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  

  async getCoaches() {
    let url = `${this.API_URL}v1/coaches`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  
  async getCoach(id:any) {
    let url = `${this.API_URL}v1/coaches/${id}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async addCoach( orgId:string, coach:any) {
    let url = `${this.API_URL}v1/coaches`;
    let response = await axios.post(url,coach, { headers: this.headers });
    return response.data;
  }

  async deleteCoach( id:any) {
    let url = `${this.API_URL}v1/coaches/${id}`;
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }
}
