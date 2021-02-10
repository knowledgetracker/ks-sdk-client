var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { API_ENVIRONMENT } from "./config";
export class BatchClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        console.log(this.headers);
        this.API_URL =
            config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
    }
    addBatch(batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches`;
            let response = yield axios.post(url, batch, { headers: this.headers });
            return response.data;
        });
    }
    updateBatch(batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches`;
            let response = yield axios.post(url, batch, { headers: this.headers });
            return response.data;
        });
    }
    deleteBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}`;
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatches() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/users`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchCourses(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchCourse(id, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses/${courseId}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    addCourseToBatch(id, batchcourse) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses`;
            let response = yield axios.post(url, batchcourse, {
                headers: this.headers,
            });
            return response.data;
        });
    }
    removeCourseFromBatch(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses/${userId}`;
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    addUserToBatch(id, batchUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/users`;
            let response = yield axios.post(url, batchUser, { headers: this.headers });
            return response.data;
        });
    }
    removeUserFromBatch(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/users/${userId}`;
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchActivities(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/activity`;
            let response = yield axios.delete(url);
            return response.data;
        });
    }
    getBatchCourseTopics(batchId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/${courseId}/batches/${batchId}`;
            let response = yield axios.get(url);
            return response.data;
        });
    }
    updateBatchTopicStatus(topicId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}`;
            let response = yield axios.patch(url, null);
            return response.data;
        });
    }
    updateBatchCoursePlan(id, userTopicId, planDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${userTopicId}/plan/${planDate}`;
            let response = yield axios.patch(url, null);
            return response.data;
        });
    }
}
