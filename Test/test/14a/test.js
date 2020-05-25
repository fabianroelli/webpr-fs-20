Array.prototype.eq = function(array) {
    let same = true;
    if(this.length !== array.length)
    {
        return false;
    }
    this.forEach((item, index) => {
        if(array[index] !== item)
        {
            same = false;
        }
        return same;
    });
    return same;
}


var a1 = [1,2,3];
var a2 = [1,2,3];
var a3 = [1,2,4];

document.writeln("Test:"+ a1.eq(a2) && ! a2.eq(a3));