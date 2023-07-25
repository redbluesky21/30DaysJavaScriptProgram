/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
    // Create a promise that resolves when the original function (fn) completes
    const ogPromiseFn = fn(...args);

    // Create a promise that rejects after the specified time limit
    const timeLimitPromise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("Time Limit Exceeded");
      }, t);
    });

    try {
      // Use Promise.race to wait for either the original function to complete
      // or the time limit to be exceeded
      const result = await Promise.race([ogPromiseFn, timeLimitPromise]);
      return result; // Resolve with the result of the original function
      }   
    catch (error) {
      throw error; // Reject with "Time Limit Exceeded" if the time limit was exceeded
      }
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */