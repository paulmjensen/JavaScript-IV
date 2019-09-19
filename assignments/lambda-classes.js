// CODE here for your Lambda Classes
class Person {
    constructor(attr){
    this.name = attr.name,
    this.age = attr.age,
    this.location = attr.location
}
speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}
}

class Instructor extends Person {
    constructor(instructorattr){
        super(instructorattr);
        this.specialty = instructorattr.specialty,
        this.favLanguage = instructorattr.favLanguage,
        this.catchPhrase = instructorattr.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentattr){
        super(studentattr);
        this.previousBackground = studentattr.previousBackground,
        this.className = studentattr.className,
        this.favSubjects = studentattr.favSubjects,
    }
    listSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(Student, subject){
        return `${Student.name} has submitted a PR for ${subject}`;
    }
}