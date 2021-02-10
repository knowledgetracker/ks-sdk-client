export declare class BatchClient {
    constructor();
    static addBatch(batch: any): Promise<any>;
    static updateBatch(batch: any): Promise<any>;
    static deleteBatch(id: any): Promise<any>;
    static getBatches(): Promise<any>;
    static getBatch(id: any): Promise<any>;
    static getBatchUsers(id: any): Promise<any>;
    static getBatchCourses(id: any): Promise<any>;
    static getBatchCourse(id: any, courseId: any): Promise<any>;
    static addCourseToBatch(id: any, batchcourse: any): Promise<any>;
    static removeCourseFromBatch(id: any, userId: any): Promise<any>;
    static addUserToBatch(id: any, batchUser: any): Promise<any>;
    static removeUserFromBatch(id: any, userId: any): Promise<any>;
    static getBatchActivities(id: any): Promise<any>;
    static getBatchCourseTopics(batchId: any, courseId: any): Promise<any>;
    static updateBatchTopicStatus(topicId: any, status: any): Promise<any>;
    static updateBatchCoursePlan(id: any, userTopicId: any, planDate: any): Promise<any>;
}
