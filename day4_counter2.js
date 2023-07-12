/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let pointer = init;

  function increment() {
    ++pointer;
    return pointer;
  }

  function decrement() {
    --pointer;
    return pointer;
  }

  function reset() {
    pointer = init;
    return pointer;
  }

  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */