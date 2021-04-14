import { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
export declare const axiosRequestConfiguration: AxiosRequestConfig;
declare const _default: {
    get: <T>(url: string, queryParams?: object | undefined) => Observable<T>;
    post: <T_1>(url: string, body: object, queryParams?: object | undefined) => Observable<void | T_1>;
    put: <T_2>(url: string, body: object, queryParams?: object | undefined) => Observable<void | T_2>;
    patch: <T_3>(url: string, body: object, queryParams?: object | undefined) => Observable<void | T_3>;
    delete: <T_4>(url: string, id: number) => Observable<void | T_4>;
};
export default _default;
