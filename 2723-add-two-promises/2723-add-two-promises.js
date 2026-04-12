/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
        const res1 = await promise1.then(value => value) 
        const res2 =await promise2.then(value => value);

        const newPromise = Promise.resolve(res1 + res2);
        return newPromise
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */