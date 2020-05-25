
// Q17 - 1
function Todo(text) {
    const check = () => done = true;
    return {
        getText: () => text,
        isDone: () => done,
        check: check
    }
}
let todo =  Todo("buy milk");
todo.check();
document.writeln("Q17 : " + (todo.isDone()))
/*
// Q17 - 2
function Todo2(text) {
    let done = false;
   return {
        getText: () => text,
        isDone: () => done,
        check: () => done = true
    }
}
let todo2 = new Todo2("buy milk");
todo2.check();
document.writeln("Q17 - 2:  CONST kann nicht verändert werden!!" )


// Q17 - 3
function Todo3(text) {
    let done = false;
    const check = () => done = true;
    return {
        getText: () => text,
        isDone: () => done,
        check: check
    }
}
let todo3 = new Todo3("buy milk");
todo3.check();
document.writeln("Q17 - 3: " + (todo3.isDone()))


// Q17 - 4
function Todo4(text, done) {
    function check () { done = true; }
    return {
        getText: () => text,
        isDone: () => done,
        check: check
    }
}
let todo4 = new Todo4("buy milk",false);
todo4.check();
document.writeln("Q17 - 4: " + (todo4.isDone()))


// Q17 - 5
function Todo5(text) {
    let done = false;
    return {
        getText: () => text,
        isDone: () => done,
        check: done = true
    }
}
let todo5 = new Todo5("buy milk");
//todo5.check();
document.writeln("Q17 - 5: check is not a function" )


// Q17 - 6
function Todo6(text) {
    let done = false;
    return {
        getText: () => text,
        isDone: () => done,
        check: () => done = true
    }
}
let todo6 = new Todo6("buy milk");
todo6.check();
document.writeln("Q17 - 6: "+ (todo6.isDone()))

// Q17 - 7
function Todo7(text) {
    let done = false;
    const check = () => this.done = true;
    return {
        getText: () => text,
        isDone: () => done,
        check: check
    }
}
let todo7 = new Todo7("buy milk");
todo7.check();
document.writeln("Q17 - 7: " + (todo7.isDone()))

// Q17 - 8
function Todo8(text,done) {
    const check = () => done = true;
    return {
        getText: () => text,
        isDone: () => done,
        check: check
    }
}
let todo8 = new Todo8("buy milk",false);
todo8.check();
document.writeln("Q17 - 8: " + (todo8.isDone()))


// Q18 - 1
function handle(callback) {
    const result = [];
    callback(result);
    return result;
}
document.writeln("Q18 - 1 : " + ( handle(it => it.push(1)).length === 1 ) )


// Q18 - 2
function handle2(callback) {
    const result = [];
    return callback(result);
}
document.writeln("Q18 - 2 : " + ( handle2( () => [1] ).length === 1) )

// Q18 - 3
function handle3(callback) {
    const result = [];
    callback(result);
    return result;
}
//document.writeln("Q18 - 3 : " + ( handle3(it.push(1)).length === 1 ) )
document.writeln("Q18 - 3 : it not defined")

// Q18 - 4
function handle4(callback) {
    const result = [];
    callback(result);
    return result;
}
//let it = [];
document.writeln("Q18 - 4 : " + ( handle4( it => it.push(1)).length === 1 ) )


// Q18 - 5
function handle5(count, callback) {
    const result = [];
    for (let i=0; i < count; i++){
        callback(result);
    }
    return result;
}
document.writeln("Q18 - 5 : " + ( handle5(3,it => it.push(1)).length === 3 ) )

// Q18 - 6
function handle6(callback) {
    const result = [];
    callback(result);
    callback(result);
    return result;
}
document.writeln("Q18 - 6 : " + ( handle6( it => it.push(1)).length === 2 ) )


// Q18 - 7
function handle(callback) {
    const result = [];
    callback(result);
   return result;
}
document.writeln("Q18 -7 : " + ( handle( () => [1] ).length === 1 ) )

*/
/*
// Q18 - 8
function handle(callback) {
    const result = [];
    callback(result);
    return result;
}
let it = [];
document.writeln("Q18 - 8 : " + ( handle( () => it.push(1) ).length === 1 ) )

*/
/*
// Q18 - 9
function handle(callback) {
    const result = [];
    callback(result);
    return result;
}
document.writeln("Q18 - 9 : " + ( handle( () => it.push(1) ).length === 1 ) )
*/

/*
// Q18 - 10
function handle(callback) {
    const result = [];
    callback([]);
    return result;
}
document.writeln("Q18 - 10 : " + ( handle( it => it.push(1) ).length === 1 ) )
*/
/*
// Q18 - 11
function handle(callback) {
    return callback([]);
}
document.writeln("Q18 - 11: " + ( handle( it => { it.push(1); return it;} ).length === 1 ))
*/
/*
// Q18 - 12
function handle(callback) {
    const result = [];
    callback(result);
    return result;
}
let it = [];
document.writeln("Q18 - 10 : " + ( handle( it.push(1) ).length === 1 ) )
*/

