# movie-art [![Build Status](https://travis-ci.org/lacymorrow/movie-art.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-art)

> Get a movie poster image url in node: "Oceans Eleven" ➔ http://path/to/oceans_eleven_poster.jpg


## Install

```bash
$ npm install --save movie-art
```


## Usage

```js

var movieArt = require('movie-art');

movieArt('Oceans Eleven', function (err, url) {
    console.log(url);
    //=> http://path/to/oceans_eleven_poster.jpg
});

movieArt('Oceans Eleven', '1960', function (err, url) {
    console.log(url);
    //=> http://path/to/oceans_eleven_poster_1960.jpg
});

movieArt('Oceans Eleven', '1960', 'w92', function (err, url) {
    console.log(url);
    //=> http://path/to/oceans_eleven_poster_1960_small.jpg
});

```

## API

### movieArt(movie [, year ] [, size ], callback)

#### movie

*Required*  
Type: `string`

Movie to search for.


#### year

Type: `string` 

Optional movie year.

#### callback(err, url)


#### size

Type: `string` 

Requested poster size. 
Call `movieArt(function(e){console.log(e);});` or run the CLI command with no arguments to retrieve the list of available sizes.

*possible values at time of writing:* `w92`, `w154`, `w185`, `w342`, `w500`, `w780`, `original`


#### callback(err, url)


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global movie-art
```

#### Usage

```bash
$ movie-art --help

Usage
  $ movie-art movie [year] [size]

Example
  $ movie-art 'Oceans Eleven' 1960 w92
  http://path/to/oceans_eleven_poster_1960_small.jpg
```


## License

This package uses data from TMDB. You may consult [TMDB terms of service](https://www.themoviedb.org/documentation/api/terms-of-use) for usage rights.

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
