'use strict'
import test from 'ava'
var movieInfo = require('./index')

// it('should return an object', function () {
// 	movieInfo('crash', function (err, res) {
// 	    assert.notEqual(res.length, 0);
// 	});
// });


test('returns an object', async t => {
	t.plan(1)

	const info  = new Promise(function(resolve, reject) {
		movieInfo('crash', function (err, res) {
	    	resolve(res)
		})
	})

	t.is(typeof await info, 'object')
});

test('returns the movie Crash', async t => {
	t.plan(1)

	const title  = new Promise(function(resolve, reject) {
		movieInfo('crash', function (err, res) {
	    	resolve(res.title)
		})
	})

	t.is(await title, 'Crash')
});

test('returns the correct release date', async t => {
	t.plan(1)

	const year  = new Promise(function(resolve, reject) {
		movieInfo('blade runner', '1982', function (err, res) {
	    	resolve(res.release_date.slice(0,4))
		})
	})

	t.is(await year, '1982')
});
