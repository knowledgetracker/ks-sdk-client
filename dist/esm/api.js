import axios from 'axios';
import { defer } from 'rxjs';
import { map } from 'rxjs/operators';
export class AxiosWrapper {
    constructor(baseURL, tenantId, token) {
        this.get = (url, queryParams) => {
            return defer(() => this.axiosInstance.get(url, { params: queryParams }))
                .pipe(map(result => result.data));
        };
        this.post = (url, body, queryParams) => {
            return defer(() => this.axiosInstance.post(url, body, { params: queryParams }))
                .pipe(map(result => result.data));
        };
        this.put = (url, body, queryParams) => {
            return defer(() => this.axiosInstance.put(url, body, { params: queryParams }))
                .pipe(map(result => result.data));
        };
        this.patch = (url, body, queryParams) => {
            return defer(() => this.axiosInstance.patch(url, body, { params: queryParams }))
                .pipe(map(result => result.data));
        };
        this.deleteR = (url, id) => {
            return defer(() => (this.axiosInstance.delete(`${url}/${id}`)))
                .pipe(map(result => result.data));
        };
        let headers = {
            'Content-Type': 'application/json',
            'Org': tenantId
        };
        if (token) {
            headers = Object.assign(headers, { 'Authorization': `Bearer ${token}` });
        }
        let axiosRequestConfiguration = {
            baseURL: baseURL,
            responseType: 'json',
            headers: headers
        };
        this.axiosInstance = axios.create(axiosRequestConfiguration);
    }
}
//export default { get, post, put, patch, delete: deleteR };
