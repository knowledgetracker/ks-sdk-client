import { API_ENVIRONMENT } from "./config";
export class CourseClient {
    constructor(config = {}) {
        this.headers = config === null || config === void 0 ? void 0 : config.headers;
        console.log(this.headers);
        this.API_URL =
            config.environment === "DEV" ? API_ENVIRONMENT.DEV : API_ENVIRONMENT.PROD;
    }
    listCourses() {
        return ["Java"];
    }
}
