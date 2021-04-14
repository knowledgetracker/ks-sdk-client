"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosRequestConfiguration = void 0;
const axios_1 = __importDefault(require("axios"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.axiosRequestConfiguration = {
    //baseURL: 'http://localhost:3000',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};
const axiosInstance = axios_1.default.create(exports.axiosRequestConfiguration);
const get = (url, queryParams) => {
    return rxjs_1.defer(() => axiosInstance.get(url, { params: queryParams }))
        .pipe(operators_1.map(result => result.data));
};
const post = (url, body, queryParams) => {
    return rxjs_1.defer(() => axiosInstance.post(url, body, { params: queryParams }))
        .pipe(operators_1.map(result => result.data));
};
const put = (url, body, queryParams) => {
    return rxjs_1.defer(() => axiosInstance.put(url, body, { params: queryParams }))
        .pipe(operators_1.map(result => result.data));
};
const patch = (url, body, queryParams) => {
    return rxjs_1.defer(() => axiosInstance.patch(url, body, { params: queryParams }))
        .pipe(operators_1.map(result => result.data));
};
const deleteR = (url, id) => {
    return rxjs_1.defer(() => (axiosInstance.delete(`${url}/${id}`)))
        .pipe(operators_1.map(result => result.data));
};
exports.default = { get, post, put, patch, delete: deleteR };
