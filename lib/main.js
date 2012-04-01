"use strict";
function sleepsort(array, callback) {
    if (!array || array.length === 0)
        return process.nextTick(function() {callback([]);});
    var result = [];
    function appendResult(n) {
        result.push(n);
        callback(result);
    }
    for(var i = 0; i < array.length; i++) 
        setTimeout(appendResult(array[i]), array[i]);
}

module.exports = sleepsort;


