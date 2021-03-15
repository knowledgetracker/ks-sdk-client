export class UserCourseReport {
  modules: number = 0;
  topics: number = 0;
  total: number = 0;
  pending: number = 0;
  completed: number = 0;
  projectApplied: number = 0;
  projectPercentage: number = 0;
  percentage: number = 0;
  oldPercentage: number = 0;

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

  updateCount(status: string) {
    if (status == "C") {
      this.completed++;
      this.pending--;
    } else {
      this.completed--;
      this.pending++;
    }
  }

  updateProjectAppliedCount(status: string) {
    if (status == "A") {
      this.projectApplied++;
    } else if (status == "R") {
      this.projectApplied--;
    }
  }
}
