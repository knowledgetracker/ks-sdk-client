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
exports.UserCourseClient = void 0;
const config_1 = require("./config");
const axios_1 = __importDefault(require("axios"));
const usercourse_report_1 = require("./usercourse-report");
class UserCourseClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV" ? config_1.API_ENVIRONMENT.DEV : config_1.API_ENVIRONMENT.PROD;
    }
    getCourseTopics(courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/usercoursetopics/${courseId}/topics/${userId}`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getEnrolledCourses(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/usercourses/users/${userId}`;
            let response = yield axios_1.default.get(url, { headers: this.headers });
            return response.data;
        });
    }
    /**
     * If topic does not exists, add Course Topic else update topic status
     * @param courseId
     * @param topic
     * @param status
     * @param userId
     * @returns
     */
    updateTopicStatus(courseId, topic, status, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (topic.userTopicId) {
                return this.updateCourseTopicStatus(topic.userTopicId, status);
            }
            else {
                return this.addCourseTopic(courseId, topic.code, status, userId);
            }
        });
    }
    updateCourseTopicStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/usercoursetopics/${id}`;
            let data = { status: status };
            let response = yield axios_1.default.patch(url, data, { headers: this.headers });
            return response.data;
        });
    }
    updateTopicReviewStatus(topic, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/usercoursetopics/${topic.userTopicId}/review`;
            let data = {
                status: status
            };
            let response = yield axios_1.default.patch(url, data, { headers: this.headers });
            return response.data;
        });
    }
    addCourseTopic(courseId, topicId, status, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/usercoursetopics`;
            let data = {
                courseId: courseId,
                topicId: topicId,
                status: status,
                userId: userId
            };
            let response = yield axios_1.default.post(url, data, { headers: this.headers });
            return response.data;
        });
    }
    enrollCourse(userId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let formData = { userId: userId, courseId: courseId };
            let url = `${this.API_URL}v1/usercourses`;
            let response = yield axios_1.default.post(url, formData, { headers: this.headers });
            return response.data;
        });
    }
    assignTopic(usertopic) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/usercoursetopics/assignTopic`;
            let response = yield axios_1.default.post(url, usertopic, { headers: this.headers });
            return response.data;
        });
    }
    /**
     * Merge course data with user course data
     * @param courseData
     * @param userCourseData
     */
    mergeCourseData(courseData, userCourseData) {
        let modules = courseData.modules;
        for (let [i, moduleObj] of modules.entries()) {
            let topics = moduleObj.topics ? moduleObj.topics : [];
            let moduleTopicCompleted = 0;
            let total = topics.length;
            for (let [j, topic] of topics.entries()) {
                const userTopic = (userCourseData.find((t) => t["topicId"] == topic["code"]));
                if (userTopic) {
                    courseData.modules[i].topics[j] = Object.assign(topic, userTopic);
                    if (userTopic.status == "C") {
                        moduleTopicCompleted++;
                    }
                    topic["status"] = userTopic.status == "C" ? "C" : "P";
                    topic["selected"] = userTopic.status == "C";
                    // newTopics.push(topic);
                    courseData.modules[i].percentage = Math.ceil((100 * moduleTopicCompleted) / total);
                }
            }
        }
        return courseData;
    }
    createUserCourseReport(course) {
        let total = 0;
        let completed = 0;
        let pending = 0;
        let projectApplied = 0;
        let totalDuration = 0;
        let topicDelayed = 0;
        for (let m of course.modules) {
            let topics = m.topics ? m.topics : [];
            for (let c of topics) {
                completed += c.status == "C" ? 1 : 0;
                pending += c.status == "P" ? 1 : 0;
                projectApplied += c.reviewStatus == "A" ? 1 : 0;
                // totalDuration += c.duration;
                // topicDelayed += ((c.status == 'P' && new Date(c.plannedDate) < this.today) ? 1 : 0);
                total += 1;
            }
        }
        let hours = Math.ceil(totalDuration / 60);
        let percentage = 0;
        if (total > 0) {
            percentage = Math.round((100 * completed) / total);
        }
        let report = new usercourse_report_1.UserCourseReport();
        report.modules = course.modules.length;
        report.topics = total;
        report.pending = total - completed;
        report.completed = completed;
        report.total = total;
        report.projectApplied = projectApplied;
        return report;
    }
    getUserCourseReportData(report) {
        let reportData = [];
        reportData.push({ label: "Modules", value: report.modules });
        reportData.push({ label: "Topics", value: report.topics });
        reportData.push({ label: "Completed", value: report.completed });
        reportData.push({ label: "Pending", value: report.pending });
        reportData.push({
            label: "Percentage",
            value: report.getPercentage() + "%",
        });
        // reportData.push({
        //   label: "Project(%)",
        //   value: report.getProjectPercentage() + "%",
        // });
        return reportData;
    }
}
exports.UserCourseClient = UserCourseClient;
