
/*
// 1 - Shows 1 1
const idPromise = x => new Promise( resolve => resolve(x));

idPromise(1)
    .then( it => it)
    .then( it => document.writeln(it));
*/




// 2 - Shows 1
const idPromise = x => new Promise( resolve => resolve(x));

idPromise(1)
    .then( it => document.writeln(it));



/*
// 3 - Shows 1 1
const idPromise = x => new Promise( resolve => resolve(x));

idPromise(1)
    .then( it => document.writeln(it))
    .then( it => document.writeln(it));
*/

/*

// 4 - Shows 1 2
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};
idPromise(1)
    .then( writer )
    .then( it => it + 1)
    .then( writer );

*/

/*

// 5 - Shows 1 undefined
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};
const filterEven = n => n % 2 === 0 ? n : undefined;

idPromise(1)
    .then( writer )
    .then( filterEven)
    .then( writer );
*/



/*

// 6 - Shows 1 1
const idPromise = x => new Promise( resolve => resolve(x));

idPromise(1)
    .then( it => { document.writeln(it); return idPromise(it); })
    .then( it => document.writeln(it));

*/


/*

// 7 - Shows more than 1
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};
const filterEven = n => {if (n % 2 === 0) return n; else throw Error("not even") };

idPromise(1)
    .then( writer )
    .then( filterEven)
    .then( writer )
    .catch(err => {} /!*do nothing*!*!/);
*/


/*

// 8 - Shows 1 1
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};

idPromise(1)
    .then( writer )
    .then( it => document.writeln(it));
*/

/*

// 9 - Shows 1
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};

const filterEven = n => n % 2 === 0 ? n : undefined;


idPromise(1)
    .then( writer )
    .then( filterEven)
    .then( writer );
*/



/*

// 10 - Shows an error in the console
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};

const filterEven = n => n % 2 === 0 ? n : undefined;

idPromise(1)
    .then( writer )
    .then( filterEven)
    .then( writer );
*/




/*
// 11 - Shows 1 2 2
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};
const inc       = n => n +1;
const filterEven = n => n % 2 === 0 ? n : undefined;


idPromise(1)
    .then( writer )
    .then( inc)
    .then( writer )
    .then( filterEven)
    .then( writer );
*/


/*

// 12 - Shows 1 1
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};

idPromise(1)
    .then( writer )
    .then( it => it + 1)
    .then( writer );
*/



/*
// 13 - Shows 1
const idPromise = x => new Promise( resolve => resolve(x));
document.writeln(idPromise(1));
*/

/*

// 14 - Shows 1 1
const idPromise = x => new Promise( resolve => resolve(x));

idPromise(1)
    .then( it => {document.writeln(it); return it; } )
    .then( it => document.writeln(it));
*/



/*

// 15 - Shows 1
const idPromise = x => new Promise( resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
};
const filterEven = n => {if (n % 2 === 0) return n; else throw Error("not even") };

idPromise(1)
    .then( writer )
    .then( filterEven)
    .then( writer )
    .catch(err => {} /!*do nothing*!*!/);

*/
