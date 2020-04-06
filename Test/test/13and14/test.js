const Empty = ( () => {
    function Empty() {    }
    return Empty;
}) ();

// Q13 - 1
const empty = Empty;
document.writeln("Q13 - 1 :" + ( empty instanceof Empty));


// Q13 - 2
const empty2 =  new Empty;
document.writeln("Q13 - 2 :" + ( empty2 instanceof Empty));

// Q13 - 3
const empty3 =  new Empty;
const also3 = new Empty;
Empty.prototype.answer = 42;

document.writeln("Q13 - 3 :" + ( empty3.answer === 42 && also3.answer === 42));

// Q13 - 4
function Empty2 (){}

const empty4 =  new Empty;
Empty2.prototype.answer = 42;

document.writeln("Q13 - 4 :" + ( empty4.answer === 42));


const Person = name => {
    let age = 0;
    return {
        getAge: () => age,
        setAge: newAge => age = newAge,
        getName: () => name,
        setName: newName => name = newName
    }
};

// Q14 - 1
const me = Person("Myself");
me.setName("Sherlock");
document.writeln("Q14-1: " + (me.getName() === "Sherlok"));

//Q14 - 2
const me2 = Person("Myself");
me2.age = 50;
document.writeln("Q14-2: " +(me2.getAge()=== 50));

//Q14 - 3
const me3 = Person("Myself");
me3.setAge( 50);
document.writeln("Q14 - 3: " +( me3.getAge()=== 50));


//Q14 - 4
const me4 = Person("Myself");
me4.name = "***";
document.writeln("Q14-4: " +( me4.getName() === "***"));