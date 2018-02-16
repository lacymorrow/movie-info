'use strict'
import test from 'ava'
var movieInfo = require( './index' )

test( 'calls the callback without a year', async t => {

	t.plan( 1 )

	const title = await new Promise( ( resolve, reject ) => {

		movieInfo( 'crash', r => {

			resolve( r.title )

		} )

	} )

	t.is( title, 'Crash' )

} )

test( 'calls the callback with a year', async t => {

	t.plan( 1 )

	const title = await new Promise( ( resolve, reject ) => {

		movieInfo( 'crash', '2005', r => {

			resolve( r.title )

		} )

	} )

	t.is( title, 'Crash' )

} )

test( 'calls the callback with a numeric year', async t => {

	t.plan( 1 )

	const title = await new Promise( ( resolve, reject ) => {

		movieInfo( 'crash', 2005, r => {

			resolve( r.title )

		} )

	} )

	t.is( title, 'Crash' )

} )

test( 'returns an object', async t => {

	t.plan( 1 )

	const info = await movieInfo( 'crash' )

	t.is( typeof info, 'object' )

} )

test( 'returns the movie Crash', async t => {

	t.plan( 1 )

	const info = await movieInfo( 'crash' )

	t.is( info.title, 'Crash' )

} )

test( 'returns the correct release date', async t => {

	t.plan( 1 )

	const year = await movieInfo( 'blade runner', '1982' ).then( res =>
		res.release_date.slice( 0, 4 )
	)

	t.is( year, '1982' )

} )
