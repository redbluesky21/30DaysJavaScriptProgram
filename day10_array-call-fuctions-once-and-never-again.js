/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let Called = false;
    let a;
  
    return function(...args) {
      //works with "!Called" or "Called == false" wont work with singular =
      if (Called == false) {
        a = fn(...args);
        Called = true;
        return a;
      }
      return undefined;
    }
  
  };
  
  /**
   * let fn = (a,b,c) => (a + b + c)
   * let onceFn = once(fn)
   *
   * onceFn(1,2,3); // 6
   * onceFn(2,3,6); // returns undefined without calling fn
  
       return function(...args){
          
      }
   */