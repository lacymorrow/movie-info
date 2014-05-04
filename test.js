'use strict';
var assert = require('assert');
var movieInfo = require('./index');

it('should return an object', function () {
	movieInfo('crash', function (err, res) {
	    assert.notStrictEqual(res.length, 0);
	});
});
