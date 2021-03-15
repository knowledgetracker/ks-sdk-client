"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseReport = void 0;
class UserCourseReport {
    constructor() {
        this.modules = 0;
        this.topics = 0;
        this.total = 0;
        this.pending = 0;
        this.completed = 0;
        this.projectApplied = 0;
        this.projectPercentage = 0;
        this.percentage = 0;
        this.oldPercentage = 0;
    }
    getPercentage() {
        let percentage = 0;
        if (this.total > 0) {
            percentage = Math.round((100 * this.completed) / this.total);
        }
        return percentage;
    }
    getProjectPercentage() {
        let percentage = 0;
        if (this.total > 0) {
            percentage = Math.round((100 * this.projectApplied) / this.total);
        }
        return percentage;
    }
    updateCount(status) {
        if (status == "C") {
            this.completed++;
            this.pending--;
        }
        else {
            this.completed--;
            this.pending++;
        }
    }
    updateProjectAppliedCount(status) {
        if (status == "A") {
            this.projectApplied++;
        }
        else if (status == "R") {
            this.projectApplied--;
        }
    }
}
exports.UserCourseReport = UserCourseReport;
