'use strict';
import test from 'ava';
var movieInfo = require('./index');

/* jshint ignore:start */
test('returns an object', async t => {
	t.plan(1);

	const info = await movieInfo('crash');

	t.is(typeof info, 'object');
});

test('returns the movie Crash', async t => {
	t.plan(1);

	const info = await movieInfo('crash');

	t.is(info.title, 'Crash');
});

test('returns the correct release date', async t => {
	t.plan(1);

	const year = await movieInfo('blade runner', '1982').then(res =>
		res.release_date.slice(0, 4)
	);

	t.is(year, '1982');
});
