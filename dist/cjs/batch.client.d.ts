export declare class BatchClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    addBatch(batch: any): Promise<any>;
    updateBatch(batch: any): Promise<any>;
    updateBatchCourse(id: any, batchcourse: any): Promise<any>;
    deleteBatch(id: any): Promise<any>;
    getBatches(): Promise<any>;
    getBatch(id: any): Promise<any>;
    getBatchUsers(id: any): Promise<any>;
    getBatchCourses(id: any): Promise<any>;
    getBatchCourse(id: any, courseId: any): Promise<any>;
    addCourseToBatch(id: any, batchcourse: any): Promise<any>;
    removeCourseFromBatch(id: any, userId: any): Promise<any>;
    addUserToBatch(id: any, batchUser: any): Promise<any>;
    removeUserFromBatch(id: any, userId: any): Promise<any>;
    getBatchActivities(id: any): Promise<any>;
    getBatchCourseTopics(batchId: any, courseId: any): Promise<any>;
    updateBatchTopicStatus(topicId: any, status: any): Promise<any>;
    updateBatchCoursePlan(id: any, userTopicId: any, planDate: any): Promise<any>;
    getBatchListWidgetData(data?: any): Promise<{
        label: string;
        value: any;
    }[]>;
    getBatchCourseListReport(courses?: any): Promise<{
        label: string;
        value: any;
    }[]>;
    getBatchCourseTopicReport(data?: any): Promise<({
        label: string;
        value: number;
    } | {
        label: string;
        value: string;
    })[]>;
    getBatchCoursePlanReport(data?: any): Promise<({
        label: string;
        value: number;
    } | {
        label: string;
        value: string;
    })[]>;
    getBatchActivitiesReport(data: any, batch: any): Promise<{
        label: string;
        value: any;
    }[]>;
}
