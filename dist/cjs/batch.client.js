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
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        console.log(this.headers);
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
    }
    addBatch(batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches`;
            let response = yield axios_1.default.post(url, batch, { headers: this.headers });
            return response.data;
        });
    }
    updateBatch(batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches`;
            let response = yield axios_1.default.post(url, batch, { headers: this.headers });
            return response.data;
        });
    }
    deleteBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}`;
            let response = yield axios_1.default.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatches() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/users`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchCourses(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchCourse(id, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses/${courseId}`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    addCourseToBatch(id, batchcourse) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses`;
            let response = yield axios_1.default.post(url, batchcourse, {
                headers: this.headers,
            });
            return response.data;
        });
    }
    removeCourseFromBatch(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses/${userId}`;
            let response = yield axios_1.default.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    addUserToBatch(id, batchUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/users`;
            let response = yield axios_1.default.post(url, batchUser, { headers: this.headers });
            return response.data;
        });
    }
    removeUserFromBatch(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/users/${userId}`;
            let response = yield axios_1.default.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchActivities(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/activity`;
            let response = yield axios_1.default.delete(url);
            return response.data;
        });
    }
    getBatchCourseTopics(batchId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/${courseId}/batches/${batchId}`;
            let response = yield axios_1.default.get(url);
            return response.data;
        });
    }
    updateBatchTopicStatus(topicId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}`;
            let response = yield axios_1.default.patch(url, null);
            return response.data;
        });
    }
    updateBatchCoursePlan(id, userTopicId, planDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${userTopicId}/plan/${planDate}`;
            let response = yield axios_1.default.patch(url, null);
            return response.data;
        });
    }
    getBatchListWidgetData(data = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let total = data.length;
            let completed = data.filter((b) => b.status == "COMPLETED").length;
            let inProgress = data.filter((b) => b.status == "IN_PROGRESS").length;
            let scheduled = data.filter((b) => b.status == "SCHEDULED").length;
            let users = data.reduce((sum, obj) => sum + obj.noOfParticipants, 0);
            let reportData = [];
            reportData.push({ label: "Batches", value: total });
            reportData.push({ label: "Users", value: users });
            reportData.push({ label: "Completed", value: completed });
            reportData.push({ label: "In Progress", value: inProgress });
            reportData.push({ label: "Scheduled", value: scheduled });
            return reportData;
        });
    }
    getBatchCourseListReport(courses = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let reportData = [];
            let i = 0;
            let total = 0;
            let completed = 0;
            let pending = 0;
            for (let c of courses) {
                completed += c.completed_topics;
                pending += c.pending_topics;
                total += c.pending_topics + c.completed_topics;
            }
            let percentage = 0;
            if (total > 0) {
                percentage = Math.round((100 * completed) / total);
            }
            reportData.push({ label: "Courses", value: courses.length });
            reportData.push({ label: "Topics", value: total });
            reportData.push({ label: "Completed", value: completed });
            reportData.push({ label: "Pending", value: pending });
            reportData.push({ label: "Percentage", value: percentage + "%" });
            return reportData;
        });
    }
    getBatchCourseTopicReport(data = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let today = new Date();
            let reportData = [];
            let i = 0;
            let total = 0;
            let completed = 0;
            let pending = 0;
            let totalDuration = 0;
            let topicDelayed = 0;
            let modules = Object.keys(data);
            for (let m of modules) {
                let topics = data[m];
                for (let c of topics) {
                    completed += c.status == "C" ? 1 : 0;
                    pending += c.status == "P" ? 1 : 0;
                    totalDuration += c.duration;
                    topicDelayed +=
                        c.status == "P" && new Date(c.plannedDate) < today ? 1 : 0;
                    total += 1;
                }
            }
            let hours = Math.ceil(totalDuration / 60);
            let percentage = Math.round((100 * completed) / total);
            reportData.push({ label: "Duration(Hrs)", value: hours });
            reportData.push({ label: "Topics", value: total });
            reportData.push({ label: "Completed", value: completed });
            reportData.push({ label: "Pending", value: pending });
            reportData.push({ label: "Percentage", value: percentage + "%" });
            reportData.push({ label: "Topics Due", value: topicDelayed });
            return reportData;
        });
    }
}
exports.BatchClient = BatchClient;
