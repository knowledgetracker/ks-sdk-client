import { API_ENVIRONMENT } from "../config";
import { AxiosWrapper } from "../api";
import { catchError } from "rxjs/operators";
import { from, Observable, of } from "rxjs";

export class CoachClient {
  axiosWrapper: AxiosWrapper;
  
  constructor(apiUrl:string,orgId?:string,accessToken?:string) {  
    
    this.axiosWrapper = new AxiosWrapper(apiUrl, orgId, accessToken);
    
  }

  

  getCoaches = (): Observable<any> =>  {
    
    const response = this.axiosWrapper.get('v1/coaches');
    return from(response);
  }
  
  getCoach=(id:any):Observable<any>=> {    
    const response = this.axiosWrapper.get(`v1/coaches/${id}`);
    return from(response);
  }

  addCoach = ( coach:any) =>{
    
    let response = this.axiosWrapper.post(`v1/coaches`,coach);
    return from(response);
  }

  async deleteCoach( id:any) {
    
    let response = await this.axiosWrapper.deleteR(`v1/coaches`,id);
    return from(response);
  }
}
