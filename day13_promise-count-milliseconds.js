/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const status = true;
      // Check if the sum is a valid number
      if (!status) {
        reject(new Error("Error! status returned false!"));
      } else {
        resolve("We did it! status returned true!");
      }
    }, millis); // Simulate delay using millis
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
