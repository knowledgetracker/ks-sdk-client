import { UserCourseReport } from "./usercourse-report";
export declare class UserCourseClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    getCourseTopics(courseId: string, userId: string): Promise<any>;
    /**
     * If topic does not exists, add Course Topic else update topic status
     * @param courseId
     * @param topic
     * @param status
     * @param userId
     * @returns
     */
    updateTopicStatus(courseId: string, topic: any, status: string, userId: string): Promise<any>;
    updateCourseTopicStatus(topicId: any, status: string): Promise<any>;
    updateTopicReviewStatus(topic: any, status: string): Promise<any>;
    addCourseTopic(courseId: string, topicId: string, status: string, userId: string): Promise<any>;
    enrollCourse(userId: string, courseId: string): Promise<any>;
    assignTopic(usertopic: any): Promise<any>;
    /**
     * Merge course data with user course data
     * @param courseData
     * @param userCourseData
     */
    mergeCourseData(courseData: any, userCourseData: any): any;
    createUserCourseReport(course: any): ({
        label: string;
        value: number;
    } | {
        label: string;
        value: string;
    })[];
    getUserCourseReportData(report: UserCourseReport): ({
        label: string;
        value: number;
    } | {
        label: string;
        value: string;
    })[];
}
