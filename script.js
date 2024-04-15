//complete this code
let n,a;
class Person {
	constructor(name,age){
		this.n=name;
		this.a=age;
	}
	// 	get name(){return this.n;}
	// set age(age){
	//     this.a=age;
	// 	return this.a;
	// }
}

class Student extends Person {
	constructor(name,age){
        super(name,age);}
    study(){
       return console.log(this.n,"is studying");
    }
}

class Teacher extends Person {
	constructor(name,age){
        super(name,age);}
        teach(){
           return console.log(this.n,"is teaching");
        }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
