const removeFromArray = function(arr, ...removeWords) { // rest parameters gives variable args
    // for ... in iterates over all enumerable properties of an object
    // for ... of interates over all enumerable values of an object
    for (const word of removeWords) { 
        while (arr.indexOf(word) !== -1) {
            arr.splice(arr.indexOf(word), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
