"use strict";
var should = require('should');
var sleepsort = require('../lib/main');

describe('sleepsort', function() {
    describe('with an empty array argument', function() {
        it('calls the callback with an empty array', function(done) {
            var result = sleepsort([], function(result) {
                result.should.eql([]);
                done();
            });
        });
    });
    describe('with a single element array', function() {
        it('calls the callback with a single element array', function(done) {
            var result = sleepsort([1], function(result) {
                result.should.eql([1]);
                done();
            });
        });
    });
    describe('with an unsorted two element array', function() {
        it('calls the callback with a sorted two element array', function(done) {
            var result = sleepsort([2, 1], function(result) {
                result.should.eql([1, 2]);
                done();
            });
        });
    });

});

