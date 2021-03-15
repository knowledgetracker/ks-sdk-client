import { API_ENVIRONMENT } from "./config";
import axios from "axios";
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

  async updateCourseTopicStatus(topicId: any, status: string) {
    let url = `${this.API_URL}v1/usercoursetopics/topics/${topicId}/status/${status}`;
    let response = await axios.post(url, null, { headers: this.headers });
    return response.data;
  }

  async updateTopicReviewStatus(topic: any, status: string) {
    let url = `${this.API_URL}v1/usercoursetopics/topics/${topic.userTopicId}/review/${status}`;
    let response = await axios.post(url, null, { headers: this.headers });
    return response.data;
  }
  async addCourseTopic(
    courseId: string,
    topicId: string,
    status: string,
    userId: string
  ) {
    let url = `${this.API_URL}v1/usercoursetopics/${courseId}/topics/${topicId}/${status}/${userId}`;
    let response = await axios.post(url, null, { headers: this.headers });
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
}
