#!/usr/bin/env node
'use strict'
var pkg = require( './package.json' )
var movieInfo = require( './index' )
var movie = process.argv[2]

var help = function () {

	console.log( pkg.description, '\n' )
	console.log( 'Usage' )
	console.log( '  $ movie-info movie [year]\n' )
	console.log( 'Example' )
	console.log( '  $ movie-info \'Oceans Eleven\' 1960' )
	console.log( '  { ... }' )

}

var main = function () {

	if (
		process.argv.indexOf( '-h' ) !== -1 ||
		process.argv.indexOf( '--help' ) !== -1
	) {

		help()
		return

	}

	if (
		process.argv.indexOf( '-v' ) !== -1 ||
		process.argv.indexOf( '--version' ) !== -1
	) {

		console.log( pkg.version )
		return

	}

	var argc = process.argv.length
	if ( argc === 3 ) {

		movieInfo( movie, null ).then(
			res => {

				console.log( res )

			},
			err => {

				console.log( err )

			}
		)

	} else if ( argc === 4 ) {

		movieInfo( movie, process.argv[3] ).then(
			res => {

				console.log( res )

			},
			err => {

				console.log( err )

			}
		)

	} else {

		help()

	}

}

main()
