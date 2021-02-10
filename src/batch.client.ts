import axios from "axios";
import { API_ENVIRONMENT } from "./config";
export class BatchClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    console.log(this.headers);
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  async addBatch(batch: any) {
    let url = `${this.API_URL}v1/batches`;
    let response = await axios.post(url, batch, { headers: this.headers });
    return response.data;
  }

  async updateBatch(batch: any) {
    let url = `${this.API_URL}v1/batches`;
    let response = await axios.post(url, batch, { headers: this.headers });
    return response.data;
  }
  async deleteBatch(id: any) {
    let url = `${this.API_URL}v1/batches/${id}`;
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async getBatches() {
    let url = `${this.API_URL}v1/batches`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getBatch(id: any) {
    let url = `${this.API_URL}v1/batches/${id}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getBatchUsers(id: any) {
    let url = `${this.API_URL}v1/batches/${id}/users`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getBatchCourses(id: any) {
    let url = `${this.API_URL}v1/batches/${id}/courses`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getBatchCourse(id: any, courseId: any) {
    let url = `${this.API_URL}v1/batches/${id}/courses/${courseId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async addCourseToBatch(id: any, batchcourse: any) {
    let url = `${this.API_URL}v1/batches/${id}/courses`;
    let response = await axios.post(url, batchcourse, {
      headers: this.headers,
    });
    return response.data;
  }

  async removeCourseFromBatch(id: any, userId: any) {
    let url = `${this.API_URL}v1/batches/${id}/courses/${userId}`;
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async addUserToBatch(id: any, batchUser: any) {
    let url = `${this.API_URL}v1/batches/${id}/users`;
    let response = await axios.post(url, batchUser, { headers: this.headers });
    return response.data;
  }

  async removeUserFromBatch(id: any, userId: any) {
    let url = `${this.API_URL}v1/batches/${id}/users/${userId}`;
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async getBatchActivities(id: any) {
    let url = `${this.API_URL}v1/batches/${id}/activity`;
    let response = await axios.delete(url);
    return response.data;
  }

  async getBatchCourseTopics(batchId: any, courseId: any) {
    let url = `${this.API_URL}v1/batchcoursetopics/${courseId}/batches/${batchId}`;
    let response = await axios.get(url);
    return response.data;
  }

  async updateBatchTopicStatus(topicId: any, status: any) {
    let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}`;
    let response = await axios.patch(url, null);
    return response.data;
  }

  async updateBatchCoursePlan(id: any, userTopicId: any, planDate: any) {
    let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${userTopicId}/plan/${planDate}`;
    let response = await axios.patch(url, null);
    return response.data;
  }
}
