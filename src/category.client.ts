import { API_ENVIRONMENT } from "./config";
import axios from "axios";
export class CategoryClient {
  headers: any;
  API_URL: string;
  COURSE_SERVER_URL: string =
    "https://coursetracker-courses.s3.ap-south-1.amazonaws.com/spinsoft";

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  

  async getCategories() {
    let url = `${this.API_URL}v1/categories`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  
  async getCategory(id:any) {
    let url = `${this.API_URL}v1/categories/${id}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async addCategory( category:any) {
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
