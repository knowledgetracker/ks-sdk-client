import axios, { AxiosRequestConfig } from 'axios';
import {defer, Observable} from 'rxjs';

import { map } from 'rxjs/operators';

export class AxiosWrapper {
    
    axiosInstance;
    
    constructor(baseURL:string, tenantId? : string, token?:string){

        let headers:any =  {
            'Content-Type': 'application/json',
            'org':tenantId            
        }
        if(token){
            headers['Authorization']= `Bearer ${token}`;
        }
        console.log(headers);
        let axiosRequestConfiguration:AxiosRequestConfig = {
            baseURL: baseURL,
            responseType: 'json',
            headers:headers
          };

          this.axiosInstance = axios.create(axiosRequestConfiguration);
          
    }



 get = <T>(url: string, queryParams?: object): Observable<T> => {
    return defer(()=> this.axiosInstance.get<T>(url, { params: queryParams }))
        .pipe(map(result => result.data));
};

 post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(()=> this.axiosInstance.post<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

put = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(()=> this.axiosInstance.put<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

patch = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(()=> this.axiosInstance.patch<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

deleteR = <T>(url: string, id:number): Observable<T | void> => {
    return defer(() => (this.axiosInstance.delete(`${url}/${id}` )))
        .pipe(map(result => result.data)
    );
};
}

//export default { get, post, put, patch, delete: deleteR };
