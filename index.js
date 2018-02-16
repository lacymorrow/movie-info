"use strict";

(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD
		define(["fetch"], factory);
	} else if (typeof exports === "object") {
		// Node, CommonJS-like
		module.exports = factory(require("node-fetch"));
	} else {
		// Browser globals (root is window)
		root.movieInfo = factory(root.fetch);
	}
})(this, function(fetch) {
	//    methods
	function movieInfo(movie, year) {
		// search parameters
		var search = {
			key: "9d2bff12ed955c7f1f74b83187f188ae",
			base: "https://api.themoviedb.org",
			year: null,
			movie: movie
		};

		if (typeof movie !== "string") {
			throw new Error("Expected a string");
		} else if (typeof year !== "string") {
			search.year = year;
		}

		var url =
			search.base +
			encodeURI(
				"/3/search/movie?api_key=" +
					search.key +
					"&query=" +
					search.movie +
					(search.year !== null ? "&year=" + search.year : "")
			);

		// Promise
		return fetch(url, {
			method: "GET",
			mode: "no-cors"
		})
			.then(
				function(response) {
					return response.json();
				},
				function(error) {
					return Promise.reject(error.message); //=> String
				}
			)
			.then(function(json) {
				if (json && typeof json.status_message !== "undefined") {
					return Promise.reject("JSON Error: " + json.status_message);
				}
				if (json && json.results && json.results.length === 0) {
					// Retry failed search without year
					if (search.year !== null) {
						search.year = null;
						return movieInfo(search.movie, null);
					} else {
						return Promise.reject("Search Error: No results found");
					}
				} else {
					return json.results[0];
				}
			})
			.catch(function(error) {
				return error;
			});
	}

	//    exposed public method
	return movieInfo;
});
