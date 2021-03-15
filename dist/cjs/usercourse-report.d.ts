export declare class UserCourseReport {
    modules: number;
    topics: number;
    total: number;
    pending: number;
    completed: number;
    projectApplied: number;
    projectPercentage: number;
    percentage: number;
    oldPercentage: number;
    getPercentage(): number;
    getProjectPercentage(): number;
    updateCount(status: string): void;
    updateProjectAppliedCount(status: string): void;
}
