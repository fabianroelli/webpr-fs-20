const Observable = value => {
    const listeners = [];
    return {
        onChange:   callback => listeners.push(callback),
        getValue:   () => value,
        setValue:   val => {
            if (value === val) return;
            value = val;
            listeners.forEach( listener => listener(val) );
        }
    }
};

/*

// Q19 - 1
const color = Observable('white');
let updateCount = 0;
color.onChange(  _ => updateCount++);
color.setValue('white');
document.writeln( updateCount === 1 )

*/

/*

// Q19 - 2
const color = Observable('white');
color.value = 'black';

document.writeln( color.getValue()  )
*/

/*
// Q19 - 3
const color = Observable('white');
let observed = null;
color.onChange(val => observed = val);

document.writeln( observed === color.getValue() )
*/

/*
// Q19 - 4
const color = Observable('white');
color.setValue('black');

document.writeln( color.getValue() === 'black' )
*/


/*
// Q19 - 5
const color = Observable('white');
let updateCount = 0;
color.onChange( _ => updateCount++);
color.setValue = 'black';

document.writeln( color.getValue() )
*/

/*

// Q19 - 6
const color = Observable('white');
let observed = null;
color.onChange( val => observed = val);
color.setValue = 'black';

document.writeln( observed === color.getValue() )
*/
/*

// Q19 - 7
const color = Observable('white');
let observed = color.getValue();

color.onChange( val => observed = val);


document.writeln( observed === color.getValue() )
*/


/*

// Q19 - 8
const color = Observable('white');
let updateCount = 0;
const updateListener = val => updateCount++;
color.setValue('black');
document.writeln(updateCount === 1)
*/
/*

// Q19 - 9
const color = Observable('white');
let updateCount = 0;
color.onChange( _ => updateCount++);
color.setValue('black');
color.setValue('white');

document.writeln(updateCount === 2)
*/
/*

// Q19 - 10
const color = Observable('white');
document.writeln(color.getValue() === 'white')
*/
