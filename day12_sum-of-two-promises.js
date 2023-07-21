/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try{
    //we wait for it to resolve using Promise.all
    const [result1, result2] = await Promise.all([promise1, promise2]);
    //we sum the two promises together
    const sum = result1 + result2;
    return sum;
    }
    catch(error){
    // If any of the promises rejected, handle the error here
    console.error("Error:", error);
    // You might want to rethrow the error to propagate it further if needed
    throw error;
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */