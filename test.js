'use strict'
import test from 'ava'
import movieInfo from './index'

test.cb( 'calls the callback without a year', t => {

	t.plan( 1 )

	movieInfo( 'crash', ( err, res ) => {

		err && t.end( err )
		t.is( res.title, 'Crash', 'returns a matching title' )
		t.end()

	} )

} )

test.cb( 'calls the callback with a year', t => {

	t.plan( 1 )

	movieInfo( 'crash', '2005', ( err, res ) => {

		err && t.end( err )
		t.is( res.title, 'Crash' )
		t.end()

	} )

} )

test.cb( 'calls the callback with a numeric year', t => {

	t.plan( 1 )

	movieInfo( 'crash', 2005, ( err, res ) => {

		err && t.end( err )
		t.is( res.title, 'Crash', 'returns a matching title' )
		t.end()

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
