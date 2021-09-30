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
    updateBatch(id, batch) {
        return __awaiter(this, void 0, void 0, function* () {
            // let createdBy = this.authService.getLoggedInUsername();
            // batch["createdBy"] = createdBy;
            let url = `${this.API_URL}v1/batches/${id}`;
            let response = yield axios.put(url, batch, { headers: this.headers });
            return response.data;
        });
    }
    updateBatchCourse(id, batchcourse) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses/${batchcourse.courseId}`;
            let response = yield axios.put(url, batchcourse, { headers: this.headers });
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
    removeCourseFromBatch(id, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${id}/courses/${courseId}`;
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
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getBatchCourseTopics(batchId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batches/${batchId}/courses/${courseId}/topics`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    updateBatchTopicStatus(topicId, courseId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}?courseId=${courseId}`;
            let response = yield axios.patch(url, null, { headers: this.headers });
            return response.data;
        });
    }
    updateBatchTopic(batchTopic) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/${batchTopic.id}`;
            let response = yield axios.put(url, batchTopic, { headers: this.headers });
            return response.data;
        });
    }
    updateBatchCoursePlan(batchTopic) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/batchcoursetopics/${batchTopic.id}/plan`;
            let response = yield axios.put(url, batchTopic, { headers: this.headers });
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
                completed += parseInt(c.completedTopics);
                pending += parseInt(c.pendingTopics);
                total += parseInt(c.pendingTopics) + parseInt(c.completedTopics);
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
            let percentage = 0;
            if (total > 0) {
                percentage = Math.round((100 * completed) / total);
            }
            reportData.push({ label: "Duration(Hrs)", value: hours });
            reportData.push({ label: "Topics", value: total });
            reportData.push({ label: "Completed", value: completed });
            reportData.push({ label: "Pending", value: pending });
            reportData.push({ label: "Percentage", value: percentage + "%" });
            reportData.push({ label: "Topics Due", value: topicDelayed });
            return reportData;
        });
    }
    getBatchCoursePlanReport(data = []) {
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
            let percentage = 0;
            if (total > 0) {
                percentage = Math.round((100 * completed) / total);
            }
            reportData.push({ label: "Duration(Hrs)", value: hours });
            reportData.push({ label: "Topics", value: total });
            reportData.push({ label: "Completed", value: completed });
            reportData.push({ label: "Pending", value: pending });
            reportData.push({ label: "Percentage", value: percentage + "%" });
            reportData.push({ label: "Topics Due", value: topicDelayed });
            return reportData;
        });
    }
    getBatchActivitiesReport(data = [], batch) {
        return __awaiter(this, void 0, void 0, function* () {
            let reportData = [];
            let total = data.length;
            let totalTopics = data.reduce((sum, obj) => {
                return sum + obj.cnt;
            }, 0);
            let date1 = new Date();
            let date2 = new Date(batch.endDate);
            const startDate = new Date(batch.startDate);
            const totalDays = Math.ceil(Math.abs(date2 - startDate) / (1000 * 60 * 60 * 24));
            const daysCompleted = Math.ceil(Math.abs(date1 - startDate) / (1000 * 60 * 60 * 24));
            let topicsPerDay = Math.round(totalTopics / daysCompleted);
            //this.reportData.push({"label": "Total Days", "value": totalDays  });
            reportData.push({ label: "Completed Days", value: daysCompleted });
            reportData.push({ label: "Activity Days", value: data.length });
            reportData.push({ label: "Topics", value: totalTopics });
            reportData.push({ label: "Topics per Day", value: topicsPerDay });
            return reportData;
        });
    }
}
