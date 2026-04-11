/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let val = x;

        for(let i = functions.length -1; i >= 0; i--){
            console.log(i)
            const functionValue = functions[i](val);
            console.log(functionValue);
            val = functionValue;
        }
        console.log(functions)

        return val
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */