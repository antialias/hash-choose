'use strict';
var hashChoose = require('../index');
var assert = require('assert');
describe("hash-choose", function () {
    var getValue;
    beforeEach(function () {
        getValue = hashChoose({
            map: {
                123: 'foo',
                234: 'bar',
                345: 'baz'
            },
            hash: function (x) {
                return x + 100;
            }
        });
    });
    it('should use the map when map contains hashed value', function () {
        assert.equal(getValue(23), 'foo');
        assert.equal(getValue(134), 'bar');
        assert.equal(getValue(134), 'bar');
    });
    it('should mod to the hash value when map does not contain hash value', function () {
        assert.equal(getValue(700), 'baz');
        assert.equal(getValue(899), 'foo');
    });
});
