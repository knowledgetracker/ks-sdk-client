import { API_ENVIRONMENT } from "../config";
import axios from "axios";
import api from "../api";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

export class CoachClient {
  headers: any;
  API_URL: string;
  url:string;
  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
    this.url = `${this.API_URL}v1/coaches`;
  }

  

  getCoaches = (): Observable<any> =>  {
    
    const response = api.get(this.url ,{ headers: this.headers });
    return of(response);
  }
  
  getCoach=(id:any):Observable<any>=> {    
    const response = api.get(`${this.url}/${id}`, { headers: this.headers });
    return of(response);
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
