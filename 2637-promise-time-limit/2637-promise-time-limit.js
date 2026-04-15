/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // let result = {}

        // cnst a = await fn(args);

        const newPromise = new Promise((resolve, reject) => {

            // timer
            setTimeout(() => {reject("Time Limit Exceeded")}, t) ;

            // fn
            fn(...args).then(res => resolve(res)).catch((err) => reject(err))
        })

    return  newPromise
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */