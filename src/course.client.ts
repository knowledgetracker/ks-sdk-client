import { API_ENVIRONMENT } from "./config";
import axios from "axios";
export class CourseClient {
  headers: any;
  API_URL: string;
  COURSE_SERVER_URL: string =
    "https://coursetracker-courses.s3.ap-south-1.amazonaws.com/spinsoft";

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  async list(orgId:any = null) {

    let url = `${this.API_URL}v1/courses?orgId=${orgId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async findOne(id: any) {
    let url = `${this.API_URL}v1/courses/${id}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async listModules(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/modules`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async listSections(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/sections`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async save(course: any) {
    //let createdBy = this.authService.getLoggedInUserId();
    //course["createdBy"] = createdBy;
    let url = `${this.API_URL}v1/courses`;
    let response = await axios.post(url, course, { headers: this.headers });
    return response.data;
  }

  async update(id: any, course: any) {
    //let createdBy = this.authService.getLoggedInUserId();
    //course["createdBy"] = createdBy;
    let url = `${this.API_URL}v1/courses/${id}`;
    let response = await axios.put(url, course, { headers: this.headers });
    return response.data;
  }

  async delete(id: any) {
    //let createdBy = this.authService.getLoggedInUserId();
    let url = `${this.API_URL}v1/courses/${id}`;
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async addModule(courseId: any, module: any) {
    // module["createdBy"] = this.authService.getLoggedInUserId();
    let url = `${this.API_URL}v1/courses/${courseId}/modules`;
    let response = await axios.post(url, module, { headers: this.headers });
    return response.data;
  }

  async addSection(courseId: any, section: any) {
    //section["createdBy"] = this.authService.getLoggedInUserId();
    let url = `${this.API_URL}v1/courses/${courseId}/sections`;
    let response = await axios.post(url, section, { headers: this.headers });
    return response.data;
  }

  async addLecture(courseId: any, lecture: any) {
    //lecture["createdBy"] = this.authService.getLoggedInUserId();
    let url = `${this.API_URL}v1/courses/${courseId}/sections/${lecture.sectionId}/lectures`;
    //return this.http.post(url, lecture, { headers: this.getHeaders() });
    let response = await axios.post(url, lecture, { headers: this.headers });
    return response.data;
  }

  async deleteLecture(courseId: any, lectureId: any) {
    //lecture["createdBy"] = this.authService.getLoggedInUserId();
    let url = `${this.API_URL}v1/courses/${courseId}/lectures/${lectureId}`;
    //return this.http.delete(url, { headers: this.getHeaders() });
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async deleteModule(courseId: any, moduleId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/modules/${moduleId}`;
    //return this.http.delete(url, { headers: this.getHeaders() });
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async deleteSection(courseId: any, sectionId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/sections/${sectionId}`;
    //return this.http.delete(url, { headers: this.getHeaders() });
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async addTopic(courseId: any, moduleId: any, topic: any) {
    //topic["createdBy"] = this.authService.getLoggedInUserId();
    let url = `${this.API_URL}v1/courses/${courseId}/modules/${moduleId}/topics`;
    //return this.http.post(url, topic, { headers: this.getHeaders() });
    let response = await axios.post(url, topic, { headers: this.headers });
    return response.data;
  }

  async deleteTopic(courseId: any, moduleId: any, topicId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/modules/${moduleId}/topics/${topicId}`;
    // return this.http.delete(url, { headers: this.getHeaders() });
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async listTopics(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/topics`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getTopics(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/content`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  //@TODO:
  async download(courseId: any) {
    let url = `${this.API_URL}v1/courseexport/${courseId}`;
    // return this.http.get(url, {
    //   headers: this.getHeaders(),
    //   responseType: "blob" as "json",
    // });
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async publish(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/publish`;
    // return this.http.put(url, null, { headers: this.getHeaders() });
    let response = await axios.put(url, null, { headers: this.headers });
    return response.data;
  }

  async importCourses(file: any) {
    //let userId = this.authService.getLoggedInUserId();
    let userId = "naresh";
    let url = this.API_URL + `v1/courses/import?createdBy=${userId}`;
    //return this.http.post(url, file, { headers: this.getHeaders() });
    let response = await axios.post(url, file, { headers: this.headers });
    return response.data;
  }

  async uploadCourseImage(courseId: any, file: any) {
    //let userId = this.authService.getLoggedInUserId();
    let url = this.API_URL + `v1/courses/${courseId}/uploadImage`;
    let response = await axios.post(url, file, { headers: this.headers });
    return response.data;
  }

  async getCourseContents(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/contents`;
    //return this.http.get(url, { headers: this.getHeaders() });
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getCourseModuleContents(courseId: any, moduleId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/lectures/${moduleId}`;
    //return this.http.get(url, { headers: this.getHeaders() });
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getCourseContent(courseId: any, contentId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/contents/${contentId}`;
    // return this.http.get(url, { headers: this.getHeaders() });
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async addCourseContent(content: any) {
    let url = `${this.API_URL}v1/contents`;
    //return this.http.post(url, content, { headers: this.getHeaders() });
    let response = await axios.post(url, content, { headers: this.headers });
    return response.data;
  }

  async updateContent(content: any) {
    let url = `${this.API_URL}v1/contents/${content.id}`;
    //return this.http.put(url, content, { headers: this.getHeaders() });
    let response = await axios.put(url, content, { headers: this.headers });
    return response.data;
  }

  async deleteCourseContent(contentId: any) {
    let url = `${this.API_URL}v1/contents/${contentId}`;
    //return this.http.delete(url, { headers: this.getHeaders() });
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async importCourseContent(id: any, content: any) {
    //let userId = this.authService.getLoggedInUserId();
    let userId = "naresh";
    let url =
      this.API_URL + `v1/courses/${id}/import/content?createdBy=${userId}`;
    // return this.http.post(url, content, { headers: this.getHeaders() });
    let response = await axios.post(url, content, { headers: this.headers });
    return response.data;
  }

  async getCourseQuestions(courseId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/questions`;
    // return this.http.get(url, { headers: this.getHeaders() });
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getCourseQuestion(courseId: any, contentId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/questions/${contentId}`;
    //return this.http.get(url, { headers: this.getHeaders() });
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async addCourseQuestion(courseId: any, content: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/questions`;
    // return this.http.post(url, content, { headers: this.getHeaders() });
    let response = await axios.post(url, content, { headers: this.headers });
    return response.data;
  }

  async deleteCourseQuestion(courseId: any, contentId: any) {
    let url = `${this.API_URL}v1/courses/${courseId}/questions/${contentId}`;
    // return this.http.delete(url, { headers: this.getHeaders() });
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async importCourseQuestion(id: any, content: any) {
    //let userId = this.authService.getLoggedInUserId();
    let userId = "naresh";
    let url =
      this.API_URL + `v1/courses/${id}/import/questions?createdBy=${userId}`;
    // return this.http.post(url, content, { headers: this.getHeaders() });
    let response = await axios.post(url, content, { headers: this.headers });
    return response.data;
  }

  async listS3CourseTopics(courseId: string) {
    //let url = `${this.apiUrl}v1/courses/${courseId}/content`;
    let url = `${this.COURSE_SERVER_URL}/${courseId}.json`;
    //return this.http.get(url, { headers: this.getHeaders() });
    let topics = await axios.get(url);
    return topics.data;
  }

  async getUsers(orgId:string, courseId: string) {
    let url = `${this.API_URL}v1/courses/${courseId}/users?org=${orgId}`;    
    //return this.http.get(url, { headers: this.getHeaders() });
    let topics = await axios.get(url);
    return topics.data;
  }
}
