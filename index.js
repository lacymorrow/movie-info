'use strict';

( function ( root, cx ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define( ['isomorphic-fetch'], cx )

	} else if ( typeof exports === 'object' ) {

		// Node, CommonJS-like
		module.exports = cx( require( 'isomorphic-fetch' ) )

	} else {

		// Browser globals (root is window)
		root.movieInfo = cx( root.fetch )

	}

} )( this, function ( fetch ) {

	function movieInfo ( movie, year, cb ) {

		// Search parameters
		var search = {
			// TMDB key (public on purpose)
			key: '9d2bff12ed955c7f1f74b83187f188ae',
			base: 'https://api.themoviedb.org',
			imageBase: 'http://image.tmdb.org/t/p/original',
			year: null,
			movie: movie
		}

		if ( typeof movie !== 'string' ) {

			throw new Error( 'Expected a string' )

		} else if ( typeof year === 'function' ) {

			cb = year

		} else if ( typeof year === 'string' || typeof year === 'number' ) {

			search.year = year

		}
		if ( typeof cb !== 'function' ) cb = null

		var url =
			search.base +
			encodeURI(
				'/3/search/movie?api_key=' +
					search.key +
					'&query=' +
					search.movie +
					( search.year !== null ? '&year=' + search.year : '' )
			)

		// Request
		var response = fetch( url, {
			method: 'GET'
		} )
			.then(
				function ( response ) {

					return response.json()

				},
				function ( error ) {

					return Promise.reject( error.message ) //= > String

				}
			)
			.then( function ( json ) {

				if ( json && typeof json.status_message !== 'undefined' ) {

					return Promise.reject( new Error( 'JSON Error: ' + json.status_message ) )

				}
				if ( json && json.results && json.results.length === 0 ) {

					// Retry failed search without year
					if ( search.year !== null ) {

						search.year = null
						return movieInfo( search.movie, null, cb )

					} else {

						return Promise.reject( new Error( 'Search Error: No results found' ) )

					}

				} else {

					// Success
					var res = json && json.results[0]
					res.imageBase = search.imageBase
					return res

				}

			} )
			.catch( error => error )

		// Callback
		if ( cb ) {

			return response.then( res => cb( null, res ), err => cb( err, null ) )

		}

		// Promise
		return response

	}

	// exposed public method
	return movieInfo

} )
