export class GradeSchool {
  constructor() {
    this.grades = {};
  }

  roster() {
    this.sort();
    return structuredClone(this.grades);
  }

  add(name, grade) {
    if (!this.grades[grade]) {
      this.grades[grade] = [];
    }

    Object.values(this.grades).forEach((grade) => {
      const idx = grade.indexOf(name);
      if (idx >= 0) {
        grade.splice(idx, 1);
      }
    })

    this.grades[grade].push(name);
  }

  sort() {
    Object.values(this.grades).forEach(students => {
      students.sort();
    });
  }

  grade(grade) {
    this.sort();
    return (this.grades[grade] || []).slice();
  }
}
