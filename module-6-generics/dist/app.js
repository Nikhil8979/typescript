"use strict";
// const names: Array<string> = [];
function createCourseGoal(title, description, date) {
    let goalCourse = {};
    goalCourse.title = title;
    goalCourse.description = description;
    goalCourse.date = date;
    return goalCourse;
}
const names = ["Nikhil", "Pragya"];
names.map((name, nameIndex) => console.log(name, nameIndex + 1, "-------- name ------"));
//# sourceMappingURL=app.js.map