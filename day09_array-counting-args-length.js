/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        count++;
    } 
    return count;
};
// or just return args.length


/**
 * argumentsLength(1, 2, 3); // 3
 */
