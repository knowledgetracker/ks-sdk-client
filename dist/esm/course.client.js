var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_ENVIRONMENT } from "./config";
import axios from "axios";
export class CourseClient {
    constructor(config = {}) {
        this.COURSE_SERVER_URL = "https://coursetracker-courses.s3.ap-south-1.amazonaws.com/spinsoft";
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        this.API_URL =
            config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${id}`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    listModules(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/modules`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    listSections(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/sections`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    save(course) {
        return __awaiter(this, void 0, void 0, function* () {
            //let createdBy = this.authService.getLoggedInUserId();
            //course["createdBy"] = createdBy;
            let url = `${this.API_URL}v1/courses`;
            let response = yield axios.post(url, course, { headers: this.headers });
            return response.data;
        });
    }
    update(id, course) {
        return __awaiter(this, void 0, void 0, function* () {
            //let createdBy = this.authService.getLoggedInUserId();
            //course["createdBy"] = createdBy;
            let url = `${this.API_URL}v1/courses/${id}`;
            let response = yield axios.put(url, course, { headers: this.headers });
            return response.data;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //let createdBy = this.authService.getLoggedInUserId();
            let url = `${this.API_URL}v1/courses/${id}`;
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    addModule(courseId, module) {
        return __awaiter(this, void 0, void 0, function* () {
            // module["createdBy"] = this.authService.getLoggedInUserId();
            let url = `${this.API_URL}v1/courses/${courseId}/modules`;
            let response = yield axios.post(url, module, { headers: this.headers });
            return response.data;
        });
    }
    addSection(courseId, section) {
        return __awaiter(this, void 0, void 0, function* () {
            //section["createdBy"] = this.authService.getLoggedInUserId();
            let url = `${this.API_URL}v1/courses/${courseId}/sections`;
            let response = yield axios.post(url, section, { headers: this.headers });
            return response.data;
        });
    }
    addLecture(courseId, lecture) {
        return __awaiter(this, void 0, void 0, function* () {
            //lecture["createdBy"] = this.authService.getLoggedInUserId();
            let url = `${this.API_URL}v1/courses/${courseId}/sections/${lecture.sectionId}/lectures`;
            //return this.http.post(url, lecture, { headers: this.getHeaders() });
            let response = yield axios.post(url, lecture, { headers: this.headers });
            return response.data;
        });
    }
    deleteLecture(courseId, lectureId) {
        return __awaiter(this, void 0, void 0, function* () {
            //lecture["createdBy"] = this.authService.getLoggedInUserId();
            let url = `${this.API_URL}v1/courses/${courseId}/lectures/${lectureId}`;
            //return this.http.delete(url, { headers: this.getHeaders() });
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    deleteModule(courseId, moduleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/modules/${moduleId}`;
            //return this.http.delete(url, { headers: this.getHeaders() });
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    deleteSection(courseId, sectionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/sections/${sectionId}`;
            //return this.http.delete(url, { headers: this.getHeaders() });
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    addTopic(courseId, moduleId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            //topic["createdBy"] = this.authService.getLoggedInUserId();
            let url = `${this.API_URL}v1/courses/${courseId}/modules/${moduleId}/topics`;
            //return this.http.post(url, topic, { headers: this.getHeaders() });
            let response = yield axios.post(url, topic, { headers: this.headers });
            return response.data;
        });
    }
    deleteTopic(courseId, moduleId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/modules/${moduleId}/topics/${topicId}`;
            // return this.http.delete(url, { headers: this.getHeaders() });
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    listTopics(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/topics`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getTopics(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/content`;
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    //@TODO:
    download(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courseexport/${courseId}`;
            // return this.http.get(url, {
            //   headers: this.getHeaders(),
            //   responseType: "blob" as "json",
            // });
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    publish(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/publish`;
            // return this.http.put(url, null, { headers: this.getHeaders() });
            let response = yield axios.put(url, null, { headers: this.headers });
            return response.data;
        });
    }
    importCourses(file) {
        return __awaiter(this, void 0, void 0, function* () {
            //let userId = this.authService.getLoggedInUserId();
            let userId = "naresh";
            let url = this.API_URL + `v1/courses/import?createdBy=${userId}`;
            //return this.http.post(url, file, { headers: this.getHeaders() });
            let response = yield axios.post(url, file, { headers: this.headers });
            return response.data;
        });
    }
    uploadCourseImage(courseId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            //let userId = this.authService.getLoggedInUserId();
            let url = this.API_URL + `v1/courses/${courseId}/uploadImage`;
            let response = yield axios.post(url, file, { headers: this.headers });
            return response.data;
        });
    }
    getCourseContents(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/contents`;
            //return this.http.get(url, { headers: this.getHeaders() });
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getCourseModuleContents(courseId, moduleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/lectures/${moduleId}`;
            //return this.http.get(url, { headers: this.getHeaders() });
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getCourseContent(courseId, contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/contents/${contentId}`;
            // return this.http.get(url, { headers: this.getHeaders() });
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    addCourseContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/contents`;
            //return this.http.post(url, content, { headers: this.getHeaders() });
            let response = yield axios.post(url, content, { headers: this.headers });
            return response.data;
        });
    }
    updateContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/contents/${content.id}`;
            //return this.http.put(url, content, { headers: this.getHeaders() });
            let response = yield axios.put(url, content, { headers: this.headers });
            return response.data;
        });
    }
    deleteCourseContent(contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/contents/${contentId}`;
            //return this.http.delete(url, { headers: this.getHeaders() });
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    importCourseContent(id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            //let userId = this.authService.getLoggedInUserId();
            let userId = "naresh";
            let url = this.API_URL + `v1/courses/${id}/import/content?createdBy=${userId}`;
            // return this.http.post(url, content, { headers: this.getHeaders() });
            let response = yield axios.post(url, content, { headers: this.headers });
            return response.data;
        });
    }
    getCourseQuestions(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/questions`;
            // return this.http.get(url, { headers: this.getHeaders() });
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    getCourseQuestion(courseId, contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/questions/${contentId}`;
            //return this.http.get(url, { headers: this.getHeaders() });
            let response = yield axios.get(url, { headers: this.headers });
            return response.data;
        });
    }
    addCourseQuestion(courseId, content) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/questions`;
            // return this.http.post(url, content, { headers: this.getHeaders() });
            let response = yield axios.post(url, content, { headers: this.headers });
            return response.data;
        });
    }
    deleteCourseQuestion(courseId, contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/questions/${contentId}`;
            // return this.http.delete(url, { headers: this.getHeaders() });
            let response = yield axios.delete(url, { headers: this.headers });
            return response.data;
        });
    }
    importCourseQuestion(id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            //let userId = this.authService.getLoggedInUserId();
            let userId = "naresh";
            let url = this.API_URL + `v1/courses/${id}/import/questions?createdBy=${userId}`;
            // return this.http.post(url, content, { headers: this.getHeaders() });
            let response = yield axios.post(url, content, { headers: this.headers });
            return response.data;
        });
    }
    listS3CourseTopics(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            //let url = `${this.apiUrl}v1/courses/${courseId}/content`;
            let url = `${this.COURSE_SERVER_URL}/${courseId}.json`;
            //return this.http.get(url, { headers: this.getHeaders() });
            let topics = yield axios.get(url);
            return topics.data;
        });
    }
    getUsers(orgId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.API_URL}v1/courses/${courseId}/users?org=${orgId}`;
            //return this.http.get(url, { headers: this.getHeaders() });
            let topics = yield axios.get(url);
            return topics.data;
        });
    }
}
