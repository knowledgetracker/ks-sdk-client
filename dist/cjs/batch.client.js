"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchClient = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
class BatchClient {
    constructor() { }
    static addBatch(batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches`;
            let response = yield axios_1.default.post(url, batch);
            return response.data;
        });
    }
    static updateBatch(batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches`;
            let response = yield axios_1.default.post(url, batch);
            return response.data;
        });
    }
    static deleteBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}`;
            let response = yield axios_1.default.delete(url);
            return response.data;
        });
    }
    static getBatches() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    static getBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    static getBatchUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/users`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    static getBatchCourses(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/courses`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    static getBatchCourse(id, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/courses/${courseId}`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    static addCourseToBatch(id, batchcourse) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/courses`;
            let response = yield axios_1.default.post(url, batchcourse);
            return response.data;
        });
    }
    static removeCourseFromBatch(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/courses/${userId}`;
            let response = yield axios_1.default.delete(url);
            return response.data;
        });
    }
    static addUserToBatch(id, batchUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/users`;
            let response = yield axios_1.default.post(url, batchUser);
            return response.data;
        });
    }
    static removeUserFromBatch(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/users/${userId}`;
            let response = yield axios_1.default.delete(url);
            return response.data;
        });
    }
    static getBatchActivities(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batches/${id}/activity`;
            let response = yield axios_1.default.delete(url);
            return response.data;
        });
    }
    static getBatchCourseTopics(batchId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batchcoursetopics/${courseId}/batches/${batchId}`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    static updateBatchTopicStatus(topicId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}`;
            let response = yield axios_1.default.patch(url, null);
            return response.data;
        });
    }
    static updateBatchCoursePlan(id, userTopicId, planDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${config_1.API_URL}v1/batchcoursetopics/batchtopics/${userTopicId}/plan/${planDate}`;
            let response = yield axios_1.default.patch(url, null);
            return response.data;
        });
    }
}
exports.BatchClient = BatchClient;
