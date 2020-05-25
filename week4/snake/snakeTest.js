
const snakeOk = [];

//  before start, test is in start position
    snakeOk.push(pairEq(test[0]) (Pair(10)(5)));

//
// //  after one step, test has moved up
//     nextBoard();
//     snakeOk.push(pairEq(test[0]) (Pair(10)(4)));
//
// //  before eating food, test is of size 4
//     snakeOk.push(test.length === 4);
//
// //  after eating food, test has grown in size
//     food = Pair(10)(3);
//     nextBoard();
//     snakeOk.push(test.length === 5);
//
// //  current direction is north
//     snakeOk.push(direction === north);
//
// //  when I go clockwise, I end up east
//     changeDirection(clockwise);
//     snakeOk.push(direction === east);
//
// //  going counterclockwise, we end up north again
//     changeDirection(countercw);
//     snakeOk.push(direction === north);

// test result report
if ( snakeOk.every(elem => elem) ) {
    document.writeln("All " + snakeOk.length + " tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < snakeOk.length; i++) {
        if(snakeOk[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}
