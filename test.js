'use strict'
const test = require( 'ava' )
const movieInfo = require( './index' )

test( 'calls the callback without a year', async t => {

	t.plan( 1 )

	await movieInfo( 'crash', ( _err, res ) => {

		t.is( res.title, 'Crash', 'returns a matching title' )

	} )

} )

test( 'calls the callback with a year', async t => {

	t.plan( 1 )

	await movieInfo( 'crash', '2005', ( _err, res ) => {

		t.is( res.title, 'Crash' )

	} )

} )

test( 'calls the callback with a numeric year', async t => {

	t.plan( 1 )

	await movieInfo( 'crash', 2005, ( _err, res ) => {

		t.is( res.title, 'Crash', 'returns a matching title' )

	} )

} )

test( 'returns an object', async t => {

	t.plan( 1 )

	const info = await movieInfo( 'crash' )

	t.is( typeof info, 'object', 'returns an object' )

} )

test( 'returns the movie Crash', async t => {

	t.plan( 1 )

	const info = await movieInfo( 'crash' )

	t.is( info.title, 'Crash', 'returns a matching title' )

} )

test( 'returns the correct release date', async t => {

	t.plan( 1 )

	const year = await movieInfo( 'blade runner', '1982' ).then( res =>
		res.release_date.slice( 0, 4 )
	)

	t.is( year, '1982', 'returns a matching year' )

} )
