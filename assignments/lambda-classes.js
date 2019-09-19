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
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
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
        this.favSubjects = studentattr.favSubjects
    }
    listSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(Student, subject){
        return `${Student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(Student, subject){
        return `${Student.name} has begun their sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(PMattr){
        super(PMattr);
        this.gradClassName = PMattr.gradClassName;
        this.favInstructor = PMattr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, "Stand up time!"`;
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`;
    }
}

/*-----------------------------------------------------*/
/*-----------------Instructor objects-----------*/
const Eric = new Instructor({
    name: 'Eric',
    age: 12,
    location: 'South Park',
    specialty: 'front-end',
    favLanguage: 'HTML',
    catchPhrase: `"Screw you guys, I'm going home."`
})

const Kenny = new Instructor({
    name: 'Kenny',
    age: 12,
    location: 'Colorado',
    specialty: 'back-end',
    favLanguage: 'CSS',
    catchPhrase: `"muffle muffle muffle."`
})



console.log(Eric.age);
console.log(Eric.specialty);
console.log(Kenny.speak());
console.log(Kenny.demo('flexbox'));
//COME BACK TO THIS console.log(Kenny.grade());

/*-----------------Student objects-----------*/
const Kyle = new Student({
    name: 'Kyle',
    age: 13,
    location: 'CO',
    previousBackground: 'Lawyer',
    className: 'Web24',
    favSubjects: 'JS'
})

console.log(Kyle.name);
/*-----------------PM objects-----------*/