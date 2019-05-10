// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}!`;
  }

  points(student) {
    //add or deduct 0-10 points from student grade
    student.grade += Math.floor(Math.random() * 21 - 10);
    if (student.grade > 100) {
      student.grade = 100;
    }
    return `${this.name} graded ${student.name}'s assignments`;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }

  listsSubjects() {
    return `${this.name}'s favorite subjects include ${this.favSubjects.join(", ")}.`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`;
  }

  graduate() {
    if (this.grade >= 70) {
      return `${this.name} received a grade of ${this.grade} and graduates from Lambda School`;
    } else {
      return `${this.name} received a grad of ${this.grade} and needs to work harder`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor (pmAttri) {
    super(pmAttri);
    this.gradClassName = pmAttri.gradClassName;
    this.favInstructor = pmAttri.favInstructor;
  }

  standUp(slackCh) {
    return `${this.name} announces to ${slackCh}, @channel standup time!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

//Here are the instructors

const tony = new Instructor({
  name: 'Tony',
  location: 'Mercury',
  age: 45,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Coding for a better future.`
});

const yuki = new Instructor({
  name: 'Yuki',
  location: 'Venus',
  age: 38,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Maybe she's born with it. Maybe it's coding.`
});

//Here come the students

const astra = new Student({
  name: 'Astra',
  location: 'Saturn',
  age: 30,
  previousBackground: 'selling cars',
  className: 'WEB20',
  favSubjects: ['HTML', 'CSS'],
  grade: 80
});

const serena = new Student({
  name: 'Serena',
  location: 'Moon',
  age: 23,
  previousBackground: 'fighting evil',
  className: 'UX4',
  favSubjects: ['JavaScript', 'Python'],
  grade: 80
});

const poseidon = new Student({
  name: 'Poseidon',
  location: 'Neptune',
  age: 9000000,
  previousBackground: 'Protecting seafarers',
  className: 'WEB20',
  favSubjects: ['Java', 'Python', 'MySQL'],
  grade: 80
});

//Here are the PMs

const marvin = new ProjectManager({
  name: 'Marvin',
  location: 'Mars',
  age: 300,
  favLanguage: 'Java',
  specialty: 'Debugging',
  catchPhrase: `Just code it.`,
  gradClassName: 'WEB10', 
  favInstructor: 'Yuki'
});

const lita = new ProjectManager({
  name: 'Lita',
  location: 'Jupiter',
  age: 28,
  favLanguage: 'JavaScript',
  specialty: 'Design',
  catchPhrase: `Coding, you know you want it.`,
  gradClassName: 'UX2',
  favInstructor: 'Yuki'
});

function intro(obj) {
  return `${obj.name} is a student in ${obj.className} from ${obj.location}. ${obj.name} was ${obj.previousBackground} before Lambda School. ${obj.listsSubjects()}`;
}

console.log('******Intro******');
console.log(intro(astra));
console.log(intro(serena));
console.log(intro(poseidon));
console.log('******Class begins******');
console.log(yuki.speak());
console.log(yuki.demo('Responsive web design'));
//console.log(yuki.catchPhrase);
console.log('******PRAssignment time******')
console.log(`${marvin.name} says "${marvin.catchPhrase}"`);
console.log('******Astra is having trouble******');
console.log(lita.debugsCode(astra, 'Responsive web design'));
console.log('******Serena\'s code stopped working******');
console.log(marvin.debugsCode(serena, 'Responsive web design'));
console.log(astra.PRAssignment('Responsive web design'));
console.log(serena.PRAssignment('Responsive web design'));
console.log(poseidon.PRAssignment('Responsive web design'));
console.log(lita.standUp('WEB20'));
console.log(`${lita.name} says "${lita.catchPhrase}"`);
console.log('******Sprint challenge day******');
console.log(astra.sprintChallenge('Responsive web design'));
console.log(serena.sprintChallenge('Responsive web design'));
console.log(poseidon.sprintChallenge('Responsive web design'));
console.log('******The students completed the sprint challenge******');
console.log(lita.grade(serena, 'Responsive web design'));
console.log(lita.grade(poseidon, 'Responsive web design'));
console.log(lita.grade(astra, 'Responsive web design'));
console.log('******Next class begins******');
console.log(tony.speak());
console.log(tony.demo('\"this\"!'));
console.log('******Everyone is wondering what is \"this\"?******');
console.log('******Class go on for several months******');
console.log(tony.points(serena));
console.log(lita.points(poseidon));
console.log(yuki.points(astra));
console.log(tony.points(serena));
console.log(lita.points(poseidon));
console.log(marvin.points(astra));
console.log(tony.points(serena));
console.log(yuki.points(poseidon));
console.log(marvin.points(astra));
console.log(lita.points(astra));
console.log(tony.points(serena));
console.log(yuki.points(poseidon));
console.log(marvin.points(astra));
console.log('******The moment of truth******');
console.log(serena.graduate());
console.log(poseidon.graduate());
console.log(astra.graduate());
