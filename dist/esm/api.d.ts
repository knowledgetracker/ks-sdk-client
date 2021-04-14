import { Observable } from 'rxjs';
export declare class AxiosWrapper {
    axiosInstance: import("axios").AxiosInstance;
    constructor(baseURL: string, tenantId?: string, token?: string);
    get: <T>(url: string, queryParams?: object | undefined) => Observable<T>;
    post: <T>(url: string, body: object, queryParams?: object | undefined) => Observable<void | T>;
    put: <T>(url: string, body: object, queryParams?: object | undefined) => Observable<void | T>;
    patch: <T>(url: string, body: object, queryParams?: object | undefined) => Observable<void | T>;
    deleteR: <T>(url: string, id: number) => Observable<void | T>;
}
