// requires ../lambda/lambda.js



// function snakeEquals(a, b) { return a.x === b.x && a.y === b.y }
const pairEq = a => b => a(fst) === b(fst) && a(snd) === b(snd); // todo: your code here

// Pair + Pair = Pair        // Monoid
const pairPlus = a => b =>  undefined; // todo: your code here

// Function and Pair = Pair  // Functor
const pairMap = f => p =>  undefined; // todo: your code here


// Q8 - 1
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const oneTwoThree = triple(1);
document.writeln("Q8 - 1 : " + ( a(oneTwoThree) === 1));

// Q8 - 2
const person = triple;
const firstname = a;
const lastname = b;
const age = c;

const bran = person("Brendan")("Eich") (50);
document.writeln("Q8 - 2 : " + ( firstname(bran) === "Brendan"));

// Q8 - 3
const brend = person("Brendan");
const raven = brend("Stark")(16);
const eich = brend("eich")(50);
document.writeln("Q8 - 3 : " + ( age(raven) === 16));


// Q8 - 4
const oneTwoT = triple(1)(2)(3);
document.writeln("Q8 - 4 : " + ( a(oneTwoT) === 1));

// Q8 - 5
document.writeln("Q8 - 5 : " + ( firstname(brend) === "Brendan"));


// Either

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e (f)(g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("Cannot divide by 0")
        : Right (num / divisor);

const result = safeDiv(1)(1);
either(result)
    (msg => document.writeln("Either : " + msg))
    (val => document.writeln("Either : " +(val === 1)));

// Q9 - 1
const resultOne = safeDiv(1)(0);
either(resultOne)
    (msg => document.writeln("Q9 - 1 : " + msg));

// Q9 - 2
const resultTwo = safeDiv(1)(0);
either(resultTwo)
    (msg => document.writeln("Q9 - 2 : " + msg));

// Q9 - 3
const resultThree = safeDiv(1)(0);
either(resultThree)
    (msg => document.writeln("Q9 - 3 : " + msg))
    (val => document.writeln("Q9 - 3 : " + val === 1));

// Q9c
const x_ = Math.random();


const eShow = func => either (func)
(msg => "q9c: "+ msg)
(val => "Result is: " + val);

document.writeln(eShow(safeDiv(1)(0)) && (eShow( safeDiv(x_)(1)) === "Result is: "+ x_));