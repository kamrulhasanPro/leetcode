/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cach = {}

    const result = []
    let count = 0;

    return function(...args) {
const b =   cach[args] ;
console.log( {"a": cach[args], b}, `${args}` in cach)
        if(b !== undefined){
            console.log("yes")
            return cach[args]
        }else{
            const val = fn(...args);
            cach[args] = val;
            return val;
        }

        // count++        
    }
}


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