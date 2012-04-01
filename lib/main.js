"use strict";
function sleepsort(array, callback) {
    if (!array || array.length === 0)
        return process.nextTick(function() {callback([]);});
    var result = [];
    function appendResult(n) {
        return function() {
            result.push(n);
            if (array.length === result.length)
                callback(result);
        };
    }
    for(var i = 0; i < array.length; i++)
        setTimeout(appendResult(array[i]), array[i]);
}

module.exports = sleepsort;


