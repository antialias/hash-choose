'use strict';
var values = require('lodash.values');
var memoize = require('lodash.memoize');
var assign = require('lodash.assign');
module.exports = function (options) {
    var mapValues = values(options.map);
    options = assign({
        hash: undefined, // hash function, ideally returning an integer
        map: undefined, // map hash values to new values
        defaultModMap: true // if hash returns an integer, then default to values(map[hash(string) % map.length])
    }, options);
    return memoize(function (value) {
        var hashResult = options.hash(value);
        var mappedValue = options.map[hashResult];
        if (mappedValue) {
            return mappedValue;
        }
        if ("number" !== typeof hashResult) {
            return undefined;
        }
        if (!options.defaultModMap) {
            return undefined;
        }
        return mapValues[hashResult % mapValues.length];
    });
};
