import axios from "axios";
import { API_URL } from "./config";
export class BatchClient {
  constructor() {}

  static async addBatch(batch: any) {
    let url = `${API_URL}v1/batches`;
    let response = await axios.post(url, batch);
    return response.data;
  }

  static async updateBatch(batch: any) {
    let url = `${API_URL}v1/batches`;
    let response = await axios.post(url, batch);
    return response.data;
  }
  static async deleteBatch(id: any) {
    let url = `${API_URL}v1/batches/${id}`;
    let response = await axios.delete(url);
    return response.data;
  }

  static async getBatches() {
    let url = `${API_URL}v1/batches`;
    let response = await axios.get(url);
    return response.data;
  }

  static async getBatch(id: any) {
    let url = `${API_URL}v1/batches/${id}`;
    let response = await axios.get(url);
    return response.data;
  }

  static async getBatchUsers(id: any) {
    let url = `${API_URL}v1/batches/${id}/users`;
    let response = await axios.get(url);
    return response.data;
  }

  static async getBatchCourses(id: any) {
    let url = `${API_URL}v1/batches/${id}/courses`;
    let response = await axios.get(url);
    return response.data;
  }

  static async getBatchCourse(id: any, courseId: any) {
    let url = `${API_URL}v1/batches/${id}/courses/${courseId}`;
    let response = await axios.get(url);
    return response.data;
  }

  static async addCourseToBatch(id: any, batchcourse: any) {
    let url = `${API_URL}v1/batches/${id}/courses`;
    let response = await axios.post(url, batchcourse);
    return response.data;
  }

  static async removeCourseFromBatch(id: any, userId: any) {
    let url = `${API_URL}v1/batches/${id}/courses/${userId}`;
    let response = await axios.delete(url);
    return response.data;
  }

  static async addUserToBatch(id: any, batchUser: any) {
    let url = `${API_URL}v1/batches/${id}/users`;
    let response = await axios.post(url, batchUser);
    return response.data;
  }

  static async removeUserFromBatch(id: any, userId: any) {
    let url = `${API_URL}v1/batches/${id}/users/${userId}`;
    let response = await axios.delete(url);
    return response.data;
  }

  static async getBatchActivities(id: any) {
    let url = `${API_URL}v1/batches/${id}/activity`;
    let response = await axios.delete(url);
    return response.data;
  }

  static async getBatchCourseTopics(batchId: any, courseId: any) {
    let url = `${API_URL}v1/batchcoursetopics/${courseId}/batches/${batchId}`;
    let response = await axios.get(url);
    return response.data;
  }

  static async updateBatchTopicStatus(topicId: any, status: any) {
    let url = `${API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}`;
    let response = await axios.patch(url, null);
    return response.data;
  }

  static async updateBatchCoursePlan(id: any, userTopicId: any, planDate: any) {
    let url = `${API_URL}v1/batchcoursetopics/batchtopics/${userTopicId}/plan/${planDate}`;
    let response = await axios.patch(url, null);
    return response.data;
  }
}
