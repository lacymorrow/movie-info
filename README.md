# movie-info [![Build Status](https://travis-ci.org/lacymorrow/movie-info.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-info) [![npm version](https://badge.fury.io/js/movie-info.svg)](https://badge.fury.io/js/movie-info)

> Fetch information, images, rating, description, etc. about a movie.

[![movie-info](demo.svg)]()


## Install

```bash
$ npm install -g movie-info
```


#### From the command line

```bash
$ movie-info --help

Usage
  $ movie-info movie [year]

Example
  $ movie-info 'Oceans Eleven' 1960  
  //=> { ... }
```



## Usage

```bash
$ npm install --save movie-info
```

```js

const movieInfo = require('movie-info')

var movie = movieInfo('Avatar')

// search with year and handle errors
movieInfo('Oceans Eleven', '1960').then(
    function (data) {
        // success
        console.log(data)
        //=> { ... }
    },
    function (err) {
        // failed
    }
},)

```

##### Response

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


## API

### movieInfo(movie [, year ])

Returns a Promise which resolves to a movie object

#### movie

*Required*  
Type: `string`

Movie to search for.


#### year

Type: `string` 

Optional movie year.




## Related

* [album-art](https://github.com/lacymorrow/album-art)
* [movie-art](https://github.com/lacymorrow/movie-art)
* [movie-trailer](https://github.com/lacymorrow/movie-trailer)


## License

This package uses data from TMDB. You may consult [TMDB terms of service](https://www.themoviedb.org/documentation/api/terms-of-use) for usage rights.

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
