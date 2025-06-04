function Student(firstName, lastName, birthYear, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(null);
  this.attendanceIndex = 0;

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };

  this.present = function () {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.log("Всі заняття вже відмічені.");
    }
  };

  this.absent = function () {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.log("Всі заняття вже відмічені.");
    }
  };

  this.getAverageAttendance = function () {
    const validRecords = this.attendance.filter((el) => el !== null);
    if (validRecords.length === 0) return 0;
    const presentCount = validRecords.filter((el) => el === true).length;
    return presentCount / validRecords.length;
  };

  this.summary = function () {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.getAverageAttendance();

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Іван", "Петренко", 2002, [95, 92, 88, 100]);
const student2 = new Student("Олена", "Іваненко", 2003, [85, 78, 82]);
const student3 = new Student("Андрій", "Шевченко", 2001, [60, 65, 70]);

for (let i = 0; i < 20; i++) student1.present();
for (let i = 0; i < 5; i++) student1.absent();

for (let i = 0; i < 10; i++) student2.present();
for (let i = 0; i < 15; i++) student2.absent();

for (let i = 0; i < 25; i++) student3.absent();

console.log(`${student1.firstName}:`, student1.summary()); // Молодець!
console.log(`${student2.firstName}:`, student2.summary()); // Добре, але можна краще
console.log(`${student3.firstName}:`, student3.summary()); // Редиска!
