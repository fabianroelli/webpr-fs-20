
// execute asynchronous tasks in strict sequence, aka "reactive stream", "flux architecture"
const Scheduler = () => {
    let inProcess = false;
    const tasks = [];
    function process() {
        if (inProcess) { return; }
        if (tasks.length === 0) { return; } // guard clause
        inProcess = true;
        const task = tasks.pop();

        let wasOk = false;
        const ok = () => wasOk = true;
        const doit = new Promise( (resolve, reject) => {
            task(resolve);
        }). then ( () => {
            inProcess = false;
            process();
        });
    }
    function add(task) {
        tasks.unshift(task);
        process();
    }
    return {
        add: add,
        addOk: task => add( ok => { task(); ok(); }) // convenience
    }
};



// Shows 0,1
let state = [0];
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state.push(1);
        ok();
    },100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});
scheduler.add(ok => {
    document.writeln(state);
    ok();
});


/*
// Might show 0 but as well 3 or 1 or nothing
let state = 3;
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state = state - 2;
        ok();
    },100)
});
scheduler.add(ok => {
    state = state - 1;
    ok();
});
scheduler.add(ok => {
    document.writeln(state);
    ok();
});
*/

/*
// Shows 0,2
let state = [0];
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state.push(1);
        ok();
    },100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});
scheduler.add(ok => {
    document.writeln(state);
    ok();
});
*/
/*
// Shows 0
let state = [0];
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state.push(1);
        ok();
    },100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});

document.writeln(state);
*/


/*
// Shows 0
let state = [0];
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state.push(1);
        ok();
    },100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});
scheduler.add(ok => {
    document.writeln(state);
    ok();
});*/


/*// Might show 0 and no other value
let state = 3;
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state = state - 2;
        ok();
    },100)
});
scheduler.add(ok => {
    state = state - 1;
    ok();
});
scheduler.add(ok => {
    document.writeln(state);
    ok();
});*/

/*
// Might show 0 and no other value
let state = 3;
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state = state - 2;
        ok();
    },100)
});
scheduler.add(ok => {
    state = state - 1;
    ok();
});
scheduler.add(ok => {
    console.log(state);
    ok();
});
console.log('x')*/



/*// Shows 0
let state = [0];
const scheduler = Scheduler();
scheduler.add( ok => {
    setTimeout(_ => {
        state.push(1);
        ok();
    },100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});

document.writeln(state);*/




// a dataflow abstraction that is not based on concurrency but on laziness
/*
const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value
        ? value = howto()
        : value;
};



/*
const x = DataFlowVariable(() => y() * 2);
let y = DataFlowVariable(() => 1);
x();
y = DataFlowVariable(() => 2);
document.writeln(x());*/

/*
const x = DataFlowVariable(() => y() * 2);
let y = DataFlowVariable(() => 1);
y = DataFlowVariable(() => 2);
document.writeln(x());

const x = DataFlowVariable(() => y() * 2);
let y = DataFlowVariable(() => 1);

document.writeln(x());
*/