'use strict';

var getMovie = function(search) {
	/*jshint camelcase: false */
	var data = '';
	search.options.path = encodeURI(
		'/3/search/movie?api_key=' +
			search.key +
			'&query=' +
			search.movie +
			(search.year !== null ? '&year=' + search.year : '')
	);
	return new Promise(function(resolve, reject) {
		search.protocol
			.get(search.options, function(resp) {
				resp.on('data', function(chunk) {
					data += chunk;
				});
				resp.on('end', function() {
					var json = JSON.parse(data);
					if (typeof json.status_message !== 'undefined') {
						reject(new Error('JSON Error: ' + json.status_message));
					}
					if (json.results.length === 0) {
						// Retry failed search without year
						if (search.year !== null) {
							search.year = null;
							resolve(getMovie(search));
						} else {
							reject(new Error('Search Error: No results found'));
						}
					} else {
						resolve(json.results[0]);
					}
				});
			})
			.on('error', function(e) {
				reject(new Error(e));
			});
	});
};

var getConfiguration = function(search) {
	/*jshint camelcase: false */
	var data = '';
	search.options.path = encodeURI('/3/configuration?api_key=' + search.key);
	return new Promise(function(resolve, reject) {
		search.protocol
			.get(search.options, function(resp) {
				resp.on('data', function(chunk) {
					data += chunk;
				});
				resp.on('end', function() {
					var json = JSON.parse(data);
					if (typeof json.status_message !== 'undefined') {
						reject(new Error('JSON Error: ' + json.status_message));
					}
					search.baseURL = json.images.base_url;
					resolve(getMovie(search));
				});
			})
			.on('error', function(e) {
				reject(new Error(e));
			});
	});
};

var movieInfo = function(movie, year) {
	var search = {
		key: '9d2bff12ed955c7f1f74b83187f188ae',
		protocol: require('https'),
		id: null,
		year: null,
		size: null,
		sizes: null,
		movie: movie,
		options: {
			host: 'api.themoviedb.org',
			port: 443,
			path: null
		}
	};

	if (typeof movie !== 'string') {
		throw new Error('Expected a string');
	} else if (typeof year !== 'string') {
		search.year = year;
	}
	return getConfiguration(search);
};

if (typeof exports === 'object') {
	module.exports = movieInfo;
}
