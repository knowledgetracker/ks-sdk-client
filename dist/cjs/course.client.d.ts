export declare class CourseClient {
    headers: any;
    API_URL: string;
    constructor(config?: any);
    list(): Promise<any>;
    findOne(id: any): Promise<any>;
    listModules(courseId: any): Promise<any>;
    listSections(courseId: any): Promise<any>;
    save(course: any): Promise<any>;
    update(id: any, course: any): Promise<any>;
    delete(id: any): Promise<any>;
    addModule(courseId: any, module: any): Promise<any>;
    addSection(courseId: any, section: any): Promise<any>;
    addLecture(courseId: any, lecture: any): Promise<any>;
    deleteLecture(courseId: any, lectureId: any): Promise<any>;
    deleteModule(courseId: any, moduleId: any): Promise<any>;
    deleteSection(courseId: any, sectionId: any): Promise<any>;
    addTopic(courseId: any, moduleId: any, topic: any): Promise<any>;
    deleteTopic(courseId: any, moduleId: any, topicId: any): Promise<any>;
    listTopics(courseId: any): Promise<any>;
    getTopics(courseId: any): Promise<any>;
    download(courseId: any): Promise<any>;
    publish(courseId: any): Promise<any>;
    importCourses(file: any): Promise<any>;
    uploadCourseImage(courseId: any, file: any): Promise<any>;
    getCourseContents(courseId: any): Promise<any>;
    getCourseModuleContents(courseId: any, moduleId: any): Promise<any>;
    getCourseContent(courseId: any, contentId: any): Promise<any>;
    addCourseContent(content: any): Promise<any>;
    updateContent(content: any): Promise<any>;
    deleteCourseContent(contentId: any): Promise<any>;
    importCourseContent(id: any, content: any): Promise<any>;
    getCourseQuestions(courseId: any): Promise<any>;
    getCourseQuestion(courseId: any, contentId: any): Promise<any>;
    addCourseQuestion(courseId: any, content: any): Promise<any>;
    deleteCourseQuestion(courseId: any, contentId: any): Promise<any>;
    importCourseQuestion(id: any, content: any): Promise<any>;
}
