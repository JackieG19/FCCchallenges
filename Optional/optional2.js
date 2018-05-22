function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
    }
    if (typeof(numOne) !== 'number') {
        return addTwo(arguments[0]);
    }
    
    if (arguments.length === 2) {
        return typeof(arguments[1]) === 'number' ? numOne + arguments[1] : undefined;
    }
    
    return addTwo;
    
}

addTogether(2,3);

//must be numbers
//if 2 sent add together
//if one sent send back a function to chain to a function chain instead of a dot chain.