# movie-info [![Build Status](https://travis-ci.org/lacymorrow/movie-info.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-info)

> Get information, images, rating, description, etc. about a movie.


## Install

```bash
$ npm install --save movie-info
```


## Usage

```js

var movieInfo = require('movie-info');

movieInfo('Oceans Eleven', function (err, url) {
    console.log(url);
    //=> { ... }
});

movieInfo('Oceans Eleven', '1960', function (err, url) {
    console.log(url);
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


#### callback(err, url)


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
