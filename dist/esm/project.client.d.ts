export declare class ProjectClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    getMyProjects(userId: any): Promise<any>;
    getProject(id: any): Promise<any>;
    getProjects(): Promise<any>;
    createProject(project: any): Promise<any>;
    addProjectModule(projectId: any, module: any): Promise<any>;
    addProjectFeature(projectId: any, moduleId: any, feature: any): Promise<any>;
    getProjectFeatures(projectId: any): Promise<any>;
    getProjectModules(projectId: any): Promise<any>;
    getUserProjectFeatures(userId: any): Promise<any>;
}
