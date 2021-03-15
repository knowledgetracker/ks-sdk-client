import axios from "axios";
import { API_ENVIRONMENT } from "./config";
export class BatchClient {
  headers: any;

  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  async addBatch(batch: any) {
    let url = `${this.API_URL}v1/batches`;
    let response = await axios.post(url, batch, { headers: this.headers });
    return response.data;
  }

  async updateBatch(id: any, batch: any) {
    // let createdBy = this.authService.getLoggedInUsername();
    // batch["createdBy"] = createdBy;
    let url = `${this.API_URL}v1/batches/${id}`;
    let response = await axios.put(url, batch, { headers: this.headers });
    return response.data;
  }
  async updateBatchCourse(id: any, batchcourse: any) {
    let url = `${this.API_URL}v1/batches/${id}/courses/${batchcourse.courseId}`;
    let response = await axios.put(url, batchcourse, { headers: this.headers });
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

  async removeCourseFromBatch(id: any, courseId: any) {
    let url = `${this.API_URL}v1/batches/${id}/courses/${courseId}`;
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
    let response = await axios.delete(url, { headers: this.headers });
    return response.data;
  }

  async getBatchCourseTopics(batchId: any, courseId: any) {
    let url = `${this.API_URL}v1/batchcoursetopics/${courseId}/batches/${batchId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async updateBatchTopicStatus(topicId: any, courseId: any, status: any) {
    let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${topicId}/status/${status}?courseId=${courseId}`;
    let response = await axios.patch(url, null, { headers: this.headers });
    return response.data;
  }

  async updateBatchCoursePlan(id: any, userTopicId: any, planDate: any) {
    let url = `${this.API_URL}v1/batchcoursetopics/batchtopics/${userTopicId}/plan/${planDate}`;
    let response = await axios.patch(url, null, { headers: this.headers });
    return response.data;
  }

  async getBatchListWidgetData(data: any = []) {
    let total = data.length;
    let completed = data.filter((b: any) => b.status == "COMPLETED").length;
    let inProgress = data.filter((b: any) => b.status == "IN_PROGRESS").length;
    let scheduled = data.filter((b: any) => b.status == "SCHEDULED").length;
    let users = data.reduce(
      (sum: number, obj: any) => sum + obj.noOfParticipants,
      0
    );

    let reportData = [];
    reportData.push({ label: "Batches", value: total });
    reportData.push({ label: "Users", value: users });
    reportData.push({ label: "Completed", value: completed });
    reportData.push({ label: "In Progress", value: inProgress });
    reportData.push({ label: "Scheduled", value: scheduled });
    return reportData;
  }

  async getBatchCourseListReport(courses: any = []) {
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
  }
  async getBatchCourseTopicReport(data: any = []) {
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
  }

  async getBatchCoursePlanReport(data: any = []) {
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
  }

  async getBatchActivitiesReport(data: any = [], batch: any) {
    let reportData = [];
    let total = data.length;
    let totalTopics = data.reduce((sum: number, obj: any) => {
      return sum + obj.cnt;
    }, 0);

    let date1: any = new Date();
    let date2: any = new Date(batch.endDate);
    const startDate: any = new Date(batch.startDate);
    const totalDays = Math.ceil(
      Math.abs(date2 - startDate) / (1000 * 60 * 60 * 24)
    );
    const daysCompleted = Math.ceil(
      Math.abs(date1 - startDate) / (1000 * 60 * 60 * 24)
    );

    let topicsPerDay = Math.round(totalTopics / daysCompleted);
    //this.reportData.push({"label": "Total Days", "value": totalDays  });
    reportData.push({ label: "Completed Days", value: daysCompleted });
    reportData.push({ label: "Activity Days", value: data.length });
    reportData.push({ label: "Topics", value: totalTopics });
    reportData.push({ label: "Topics per Day", value: topicsPerDay });
    return reportData;
  }
}
