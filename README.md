# movie-info [![Build Status](https://travis-ci.org/lacymorrow/movie-info.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-info)

> Get information, images, rating, description, etc. about a movie.


## Install

```bash
$ npm install --save movie-info
```


## Usage

```js

var movieInfo = require('movie-info');

movieInfo('Oceans Eleven', function (err, res) {
    console.log(res);
    //=> { ... }
});

movieInfo('Oceans Eleven', '1960', function (err, res) {
    console.log(res);
    //=> { ... }
});
```

## API

### movieInfo(movie [, year ] , callback)

#### movie

*Required*  
Type: `string`

Movie to search for.


#### year

Type: `string` 

Optional movie year.


#### callback(err, res)

Returns an object in the following form:

```js
{
    adult: false,
    backdrop_path: '/lhkU86q5cszZkca9MVQLMvUAE6m.jpg',
    id: 1640,
    original_title: 'Crash',
    release_date: '2004-09-10',
    poster_path: '/pG8LL4LYMCr5uikhx9rewrW8352.jpg',
    popularity: 3.30511799781063,
    title: 'Crash',
    vote_average: 6.9,
    vote_count: 271
}
```

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global movie-info
```

#### Usage

```bash
$ movie-info --help

Usage
  $ movie-info movie [year]

Example
  $ movie-info 'Oceans Eleven' 1960
  { ... }
```


## License

This package uses data from TMDB. You may consult [TMDB terms of service](https://www.themoviedb.org/documentation/api/terms-of-use) for usage rights.

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
