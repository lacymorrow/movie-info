#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var movieInfo = require('./index');
var movie = process.argv[2];

var cb = function (err, url) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(url);
}

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ movie-info movie [year]');
	console.log('');
	console.log('Example');
	console.log('  $ movie-info \'Oceans Eleven\' 1960');
	console.log('  { ... }');
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

var argc = process.argv.length;
if (argc === 3){
	movieInfo(movie, null, cb);
} else if (argc === 4){
	movieInfo(movie, process.argv[3], cb);
} else {
	help();
}