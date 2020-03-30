//standard either
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const id = x => x;

const either = id;

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("Cannot divide by 0")
        : Right(num / divisor);


const x_ = Math.random();

const eShow = func => either(func)
(msg => msg)
(val => "Result is: " + val);

document.writeln("Q9c : ")
document.writeln( eShow( safeDiv(1)(0) ) === "Cannot divide by 0"  && eShow( safeDiv(x_)(1) )=== "Result is: "+ x_ );



// Q9 d
const twice = x => x*2;

const result = [1,2,3].map(twice).toString() === "2,4,6";
document.writeln("Q9d : ");
document.writeln(result);
