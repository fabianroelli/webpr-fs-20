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


const divides = x => y => y%x === 0 ;

const result2 = [1,2,3,4,5,6].filter(divides(3)).toString() === "3,6";
document.writeln("Result: ");
document.writeln([1,2,3,4,5,6].filter(divides(3)).toString() === "3,6");



const join = jo => (accu, cur) => accu + jo + cur;

document.writeln("Join Result: ");
document.writeln([1,2,3].reduce(join('-') ));



const bonusFormula = "e.bonus === e.revenue * 0.2"

const bonusCalculation = employee => eval(bonusFormula);
const e = {revenue: 10000, bonus: null};
bonusCalculation(e);
document.writeln(e.bonus === e.revenue * factor_);