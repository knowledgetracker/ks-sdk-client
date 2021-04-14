import axios from 'axios';
import { defer } from 'rxjs';
import { map } from 'rxjs/operators';
export const axiosRequestConfiguration = {
    //baseURL: 'http://localhost:3000',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};
const axiosInstance = axios.create(axiosRequestConfiguration);
const get = (url, queryParams) => {
    return defer(() => axiosInstance.get(url, { params: queryParams }))
        .pipe(map(result => result.data));
};
const post = (url, body, queryParams) => {
    return defer(() => axiosInstance.post(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};
const put = (url, body, queryParams) => {
    return defer(() => axiosInstance.put(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};
const patch = (url, body, queryParams) => {
    return defer(() => axiosInstance.patch(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};
const deleteR = (url, id) => {
    return defer(() => (axiosInstance.delete(`${url}/${id}`)))
        .pipe(map(result => result.data));
};
export default { get, post, put, patch, delete: deleteR };
