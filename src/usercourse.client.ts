import { API_ENVIRONMENT } from "./config";
import axios from "axios";
import { UserCourseReport } from "./usercourse-report";
export class UserCourseClient {
  headers: any;
  API_URL: string;

  constructor(config: any = {}) {
    this.headers = config?.headers;
    this.API_URL =
      config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
  }

  async getCourseTopics(courseId: string, userId: string) {
    let url = `${this.API_URL}v1/usercoursetopics/${courseId}/topics/${userId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  async getEnrolledCourses(userId: string) {
    let url = `${this.API_URL}v1/usercourses/users/${userId}`;
    let response = await axios.get(url, { headers: this.headers });
    return response.data;
  }

  /**
   * If topic does not exists, add Course Topic else update topic status
   * @param courseId
   * @param topic
   * @param status
   * @param userId
   * @returns
   */
  async updateTopicStatus(
    courseId: string,
    topic: any,
    status: string,
    userId: string
  ) {
    if (topic.userTopicId) {
      return this.updateCourseTopicStatus(topic.userTopicId, status);
    } else {
      return this.addCourseTopic(courseId, topic.code, status, userId);
    }
  }

  async updateCourseTopicStatus(id: number, status: string) {
    let url = `${this.API_URL}v1/usercoursetopics/${id}`;
    let data = { status: status };
    let response = await axios.patch(url, data, { headers: this.headers });
    return response.data;
  }

  async updateTopicReviewStatus(topic: any, status: string) {
    let url = `${this.API_URL}v1/usercoursetopics/${topic.userTopicId}/review`;
    let data = {
      status: status
    };
    let response = await axios.patch(url, data, { headers: this.headers });
    return response.data;
  }
  async addCourseTopic(
    courseId: string,
    topicId: string,
    status: string,
    userId: string
  ) {
    let url = `${this.API_URL}v1/usercoursetopics`;
    let data = {
      courseId: courseId,
      topicId: topicId,
      status: status,
      userId: userId
    }
    let response = await axios.post(url, data, { headers: this.headers });
    return response.data;
  }

  async enrollCourse(userId: string, courseId: string) {
    let formData = { userId: userId, courseId: courseId };
    let url = `${this.API_URL}v1/usercourses`;
    let response = await axios.post(url, formData, { headers: this.headers });
    return response.data;
  }

  async assignTopic(usertopic: any) {
    let url = `${this.API_URL}v1/usercoursetopics/assignTopic`;
    let response = await axios.post(url, usertopic, { headers: this.headers });
    return response.data;
  }

  /**
   * Merge course data with user course data
   * @param courseData
   * @param userCourseData
   */

  mergeCourseData(courseData: any, userCourseData: any) {
    let modules: any = courseData.modules;
    for (let [i, moduleObj] of modules.entries()) {
      let topics = moduleObj.topics ? moduleObj.topics : [];
      let moduleTopicCompleted = 0;

      let total = topics.length;
      for (let [j, topic] of topics.entries()) {
        const userTopic: any = <{}>(
          userCourseData.find((t: any) => t["topicId"] == topic["code"])
        );
        if (userTopic) {
          courseData.modules[i].topics[j] = Object.assign(topic, userTopic);
          if (userTopic.status == "C") {
            moduleTopicCompleted++;
          }
          topic["status"] = userTopic.status == "C" ? "C" : "P";
          topic["selected"] = userTopic.status == "C";
          // newTopics.push(topic);

          courseData.modules[i].percentage = Math.ceil(
            (100 * moduleTopicCompleted) / total
          );
        }
      }
    }
    return courseData;
  }

  createUserCourseReport(course: any) {
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
    let report = new UserCourseReport();
    report.modules = course.modules.length;
    report.topics = total;
    report.pending = total - completed;
    report.completed = completed;
    report.total = total;
    report.projectApplied = projectApplied;
    return report;
  }

  getUserCourseReportData(report: UserCourseReport) {
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
