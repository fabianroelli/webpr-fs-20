//  before start, test is in start position
    document.writeln(pairEq(test[0]) (pair(10)(5)));

//  after one step, test has moved up
    nextBoard();
    document.writeln(pairEq(test[0]) (pair(10)(4)));

//  before eating food, test is of size 4
    document.writeln(test.length === 4);

//  after eating food, test has grown in size
    food = pair(10)(3);
    nextBoard();
    document.writeln(test.length === 5);

//  current direction is north
    document.writeln(direction === north);

//  when I go clockwise, I end up east
    changeDirection(clockwise);
    document.writeln(direction === east);

//  going counterclockwise, we end up north again
    changeDirection(countercw);
    document.writeln(direction === north);