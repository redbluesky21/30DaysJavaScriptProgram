/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache= {};
    return function(...args) {
        const key = String(args);
        //console.log("key output: "+key);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

//sum function
const sum = (a,b) => a + b;

// Fibonacci function
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// Factorial function
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */