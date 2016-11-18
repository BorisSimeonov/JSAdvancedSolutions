//this function combines the solution
//for the first two exercises
function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let result = super.toString();
            result = 'Teacher' + result.slice(0, -1);
            return result + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let result = super.toString();
            result = 'Student' + result.slice(0, -1);
            return result + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = personAndTeacher();

let personInst = new classes.Person("Ivan", "vankata@gmail.com");
let teacherInst = new classes.Teacher("Pesho", "pesho@gmail.com", "math");
let studentInst = new classes.Student("Gosho", "gosho@gmail.com", "C++ Advanced");

console.log(personInst.toString());
console.log(teacherInst.toString());
console.log(studentInst.toString());