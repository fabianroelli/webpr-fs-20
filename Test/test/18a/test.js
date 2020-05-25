// Q 18a
const failSafe = defaultVal => func => arg1  => {
    let result = defaultVal;
    try {
        result = func(arg1);
    }catch(ex) {
    }
    return result;
}


const doError = x => { throw new Error()};
const errorCount = failSafe (1) (doError);

document.writeln(failSafe(false) (x=>x) (true) && failSafe(true) (doError)(null) && (errorCount(null) === 1));
