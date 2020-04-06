// Q15 - 1
class Person1 {
    constructor(name) {
        this.name = name
    }
    isCool(){return name === "Dierk"};
}
const p1 = new Person1("Dierk");
document.writeln("Q15 - 1:" + (p1.isCool()));


// Q 15 - 2
class Person2 {
    constructor(name) {
        this.name = name
    }
    isCool(){return this.name.length > 3};
}
const p2 = new Person2("Joe");
//p2.prototype.isCool = () => true;

//document.writeln("Q15 - 2:" + (p2.isCool()));

// Q 15 - 3
class Person3 {
    constructor(name) {
        this.name = name
    }
    isCool(){return this.name.length > 3};
}
const p3 = new Person3("Dierk");
document.writeln("Q15 - 3:" + (p3.name === "Dierk"));

document.writeln("Q15 - 4:" + (p3.isCool()));

//  Q15 - 5

class Person5 {
    constructor(name) {
        this.name = name
    }
    isCool(){return this.name.length > 3};
}
const p5 = new Person5("Joe");
Person5.prototype.isCool = () => true;
document.writeln("Q15 - 5:" + (p5.isCool()));



class Person6 {
    constructor(name) {
        this.name = name
    }
    isCool(){return this.name.length > 3};
}
const p6 = new Person6("Dierk");
const joe = {
    name: "joe",
    cool: p6.isCool
}
document.writeln("Q15 - 6:" + (joe.cool()));

class Person7 {
    constructor(name) {
    }
    isCool(){return this.name.length > 3};
}
//const p7 = new Person7("Dierk");
//document.writeln("Q15 - 7:" + (p7.isCool()));


// Q15 - 8
class Person8{
    constructor(name) {
        this.name = name
    }
    isCool(){return this.name.length > 3};
}
const p8 = new Person8("Joe");
p8.isCool = () => true;
document.writeln("Q15 - 8:" + (p8.isCool()));

class Person9 {
    isCool(){return this.name.length > 3};
}
const p9 = new Person9();
p9.name = "Dierk";
document.writeln("Q15 - 9:" + (p9.isCool()));


class Person161{}
class Student161 extends Person161{}
const s161 = new Student161();
document.writeln("Q16 - 1: " + ( s161 instanceof Person161));


class Person162{}
class Student162 {}
const s162 = new Student162();
Object.setPrototypeOf(Student162,Person162)
document.writeln("Q16 - 2: " + ( s162 instanceof Person162));


class Person163{
    constructor(name) {
        this.name = name;
    }
    isCool(){return this.name.length > 3};
}
const person163 = new Person163("Dierk");
document.writeln("Q16 - 3: " + ( person163 instanceof Person163));


class Person164{}
class Student164 {}
const s164 = new Student164();
Object.setPrototypeOf(s164, Person164.prototype);
document.writeln("Q16 - 4: " + ( s164 instanceof Student164));


class Person165{}
class Student165 {}
const s165 = new Student165();
Object.setPrototypeOf(s165, Student165.prototype);
document.writeln("Q16 - 5: " + ( s165 instanceof Person165));


class Person166{}
class Student166 extends Person166{}
const s166 = new Student166();
document.writeln("Q16 - 6: " + ( s166 instanceof Student166));


class Person167{}
class Student167 {}
const s167 = new Student167();
Object.setPrototypeOf(Student167.prototype, Person167.prototype);
document.writeln("Q16 - 7: " + ( s167 instanceof Person167));


class Person168{}
const person168 = {

}
Object.setPrototypeOf(person168, Person168.prototype);
document.writeln("Q16 - 8: " + ( person168 instanceof Person168));

class Person169{}
const person169 = {

}
Object.setPrototypeOf(person169, Person169);
document.writeln("Q16 - 9: " + ( person169 instanceof Person169));