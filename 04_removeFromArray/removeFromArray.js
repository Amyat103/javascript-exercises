const removeFromArray = function(unfilterArray, ...num) {
    let result = [];
    for (const elem of unfilterArray) {
        if (num.includes(elem)) {
            continue;
        } else {
            result.push(elem);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
