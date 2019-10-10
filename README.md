# movie-info 
[![npm version](https://badge.fury.io/js/movie-info.svg)](https://badge.fury.io/js/movie-info) [![Build Status](https://travis-ci.org/lacymorrow/movie-info.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-info) [![Try movie-info on RunKit](https://badge.runkitcdn.com/movie-info.svg)](https://npm.runkit.com/movie-info)

> Fetch information, images, rating, description, etc. about a movie.

[![movie-info](https://github.com/lacymorrow/movie-info/raw/master/demo.svg?sanitize=true)](https://github.com/lacymorrow/movie-info)

#### [Try it on RunKit](https://runkit.com/lacymorrow/movie-info) _([Output](https://runkit.io/lacymorrow/movie-info/branches/master?name=Oceans+Eleven))_


## Features
 * Use anywhere, browser or Node - UMD _([Browser Support](https://caniuse.com/#feat=fetch))_
 * Promise and Callback API
 * Includes:
   * Title
   * Release Date
   * Plot summary overview
   * Poster and backdrop images
   * IMDB rating + vote count
   * Recent popularity rating
   * Adult film (boolean)


## Install

Using [NPM](https://npmjs.com):

```bash
$ npm install -g movie-info
```

In the browser:

```html
<!-- movieInfo window global -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/movie-info/index.min.js"></script>
```
(via JSDelivr, or via [Unpkg](https://unpkg.com/movie-info))


## Usage

```js
const movieInfo = require('movie-info')

movieInfo('Avatar').then(console.log)
```

###### Callbacks
```js
movieInfo('Avatar', function (error, response){
    console.log(response)
})
```

###### Search year + Error handling
```js
movieInfo('Oceans Eleven', '1960').then(
    function (response) {
        // success
        console.log(response)
        //=> { ... }
    },
    function (error) {
        // failed
    }
})
```

#### From the command line

```bash
$ movie-info --help

Usage
  $ movie-info movie [year]

Example
  $ movie-info 'Oceans Eleven' '1960'
  //=> { ... }
```

##### Response

Example output:

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
    vote_count: 271,
    imageBase: 'http://image.tmdb.org/t/p/original'
}
```

##### Images

Combine the `image_base` with the desired path to create a complete image URL.

```js
const imageUrl = movieInfo('Avatar')
  .then(response => console.log(response.imageBase + response.poster_path))

/* OR */

var imageUrl = response.image_base + response.poster_path
    //=> http://image.tmdb.org/t/p/original/pG8LL4LYMCr5uikhx9rewrW8352.jpg
```


## API

### movieInfo(movie [, year ] [, callback])

Returns a Promise which resolves to a movie object. 

#### movie

*Required* 

Type: `string`

Movie title to search for.

#### year 

Type: `string`

Movie release year to search for. _(optional)_

#### callback(error, result)

Type: `function`

Callback function. _(optional)_


## Related

* [album-art](https://github.com/lacymorrow/album-art)
* [movie-art](https://github.com/lacymorrow/movie-art)
* [movie-trailer](https://github.com/lacymorrow/movie-trailer)


## License

This package uses data from TMDB. You may consult [TMDB terms of service](https://www.themoviedb.org/documentation/api/terms-of-use) for usage rights.

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
