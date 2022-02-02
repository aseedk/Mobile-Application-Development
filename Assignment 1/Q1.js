class Person{
   constructor() {
       this.name = "";
       this.age = 0;
       this.email = "";
    }
}

class Student extends Person{
    constructor(name,age,email,regNo,cgpa,courses) {
        super();
        this.name = name;
        this.age = age;
        this.email = email;
        this.regno = regNo;
        this.cgpa = cgpa;
        this.courses = courses;
    }
}
class Employee extends Person{

    constructor(name,age,email,department,designation,salary) {
        super();
        this.name = name;
        this.age = age;
        this.email = email;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
    }
}
class Teacher extends Employee{

    constructor(name, age, email, department, designation, salary, education, course) {
        super(name, age, email, department, designation, salary);
        this.education = education;
        this.course = course;
    }
}
class Staff extends Employee{

    constructor(name, age, email, department, designation, salary, position) {
        super(name, age, email, department, designation, salary);
        this.position = position;
    }
}
class Course {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}
student = new Student("Aseed", 21,"a@a.com","FA18-BSE-015", 3.44
    , new Course("Web Technology", "CS01"))

teacher = new Teacher("Tamimy", 45,"a@a.com","Computer Science", "Proffesor", 44000, "PHD"
    , new Course("Programming Fundamentals", "CS01"))

staff = new Staff("Hurairah", 23,"a@a.com","Psychology", "Skoorti guard", 10000, "Guard"
    , new Course("Web Technology", "CS01"))

console.log(student)
console.log(teacher)
console.log(staff)

student.print()
