"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosWrapper = void 0;
const axios_1 = __importDefault(require("axios"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class AxiosWrapper {
    constructor(baseURL, tenantId, token) {
        this.get = (url, queryParams) => {
            return rxjs_1.defer(() => this.axiosInstance.get(url, { params: queryParams }))
                .pipe(operators_1.map(result => result.data));
        };
        this.post = (url, body, queryParams) => {
            return rxjs_1.defer(() => this.axiosInstance.post(url, body, { params: queryParams }))
                .pipe(operators_1.map(result => result.data));
        };
        this.put = (url, body, queryParams) => {
            return rxjs_1.defer(() => this.axiosInstance.put(url, body, { params: queryParams }))
                .pipe(operators_1.map(result => result.data));
        };
        this.patch = (url, body, queryParams) => {
            return rxjs_1.defer(() => this.axiosInstance.patch(url, body, { params: queryParams }))
                .pipe(operators_1.map(result => result.data));
        };
        this.deleteR = (url, id) => {
            return rxjs_1.defer(() => (this.axiosInstance.delete(`${url}/${id}`)))
                .pipe(operators_1.map(result => result.data));
        };
        let headers = {
            'Content-Type': 'application/json',
            'org': tenantId
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(headers);
        let axiosRequestConfiguration = {
            baseURL: baseURL,
            responseType: 'json',
            headers: headers
        };
        this.axiosInstance = axios_1.default.create(axiosRequestConfiguration);
    }
}
exports.AxiosWrapper = AxiosWrapper;
//export default { get, post, put, patch, delete: deleteR };
