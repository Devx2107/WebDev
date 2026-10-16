// Memoisation is a technique to optimize functions by caching their results based on the input arguments. This can significantly improve performance for functions that are called frequently with the same arguments.
function memoize(fn) {
    const cache = {};                    // closure: survives between calls
    return function (arg) {
        if (arg in cache) {
            console.log("  cache hit for", arg);
            return cache[arg];
        }
        console.log("  computing for", arg);
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const fastSquare = memoize(slowSquare);