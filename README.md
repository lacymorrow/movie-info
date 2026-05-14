<div align="center">
  <a href="https://github.com/lacymorrow/movie-info">
    <img src=".github/assets/logo-horizontal.svg" alt="movie-info" width="320">
  </a>

  <p><strong>Fetch info, images, ratings, and metadata for any movie</strong> ➔ "Avatar" → <code>{ title, poster_path, vote_average, ... }</code></p>

  <p>
    <a href="https://www.npmjs.com/package/movie-info"><img alt="npm version" src="https://img.shields.io/npm/v/movie-info?style=flat"></a>
    <a href="https://www.npmjs.com/package/movie-info"><img alt="npm downloads" src="https://img.shields.io/npm/dm/movie-info?style=flat"></a>
    <a href="https://github.com/lacymorrow/movie-info/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/lacymorrow/movie-info/ci.yml?style=flat&label=CI"></a>
    <a href="./LICENSE"><img alt="License" src="https://img.shields.io/npm/l/movie-info?style=flat"></a>
    <a href="https://npm.runkit.com/movie-info"><img alt="Try on RunKit" src="https://img.shields.io/badge/Try-RunKit-f55fa6?style=flat"></a>
  </p>

  <img src="./demo.svg?sanitize=true" alt="movie-info demo" width="700">
</div>

---

> [!IMPORTANT]
> This library is **feature-complete** and only receives bug-fix updates. Feature requests still welcome — please open an issue.

## Features

- Use anywhere — browser or Node, UMD bundle ([browser support](https://caniuse.com/#feat=fetch))
- Works in React + Next.js, client and server, via [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
- Promise **and** callback API
- Returns title, release date, plot summary, poster + backdrop paths, ratings, vote count, popularity, and more
- Powered by TMDB

## Install

```bash
npm install movie-info
```

In the browser:

```html
<!-- movieInfo as a window global -->
<script src="https://cdn.jsdelivr.net/npm/movie-info/index.min.js"></script>
```

Also available via [Unpkg](https://unpkg.com/movie-info).

## Usage

```js
const movieInfo = require("movie-info");

movieInfo("Avatar").then(console.log);
//=> { title: "Avatar", release_date: "2009-12-15", poster_path: "/...", ... }
```

### Callback form

```js
movieInfo("Avatar", (error, response) => {
  console.log(response);
});
```

### Year disambiguation + error handling

```js
movieInfo("Oceans Eleven", "1960").then(
  response => console.log(response),
  error    => console.error("not found:", error),
);
```

> [!TIP]
> Try it live — [open in RunKit](https://runkit.com/lacymorrow/movie-info) (here's an [example output](https://runkit.io/lacymorrow/movie-info/branches/master?name=Oceans+Eleven)).

### Response shape

```js
{
  adult: false,
  backdrop_path: "/lhkU86q5cszZkca9MVQLMvUAE6m.jpg",
  id: 1640,
  original_title: "Crash",
  release_date: "2004-09-10",
  poster_path: "/pG8LL4LYMCr5uikhx9rewrW8352.jpg",
  popularity: 3.30511799781063,
  title: "Crash",
  vote_average: 6.9,
  vote_count: 271,
  imageBase: "http://image.tmdb.org/t/p/original"
}
```

### Building image URLs

Combine `imageBase` with any returned `*_path` field:

```js
const { imageBase, poster_path } = await movieInfo("Avatar");
const url = imageBase + poster_path;
//=> http://image.tmdb.org/t/p/original/pG8LL4LYMCr5uikhx9rewrW8352.jpg
```

## API

### `movieInfo(movie [, year ] [, callback])`

Returns a Promise that resolves to a movie object.

| Argument | Type | Required | Description |
|---|---|:---:|---|
| `movie` | `string` | ✅ | Movie title to search for |
| `year` | `string` | | Optional release-year disambiguator |
| `callback` | `(err, result) => void` | | Optional Node-style callback |

## CLI

```bash
npm install --global movie-info

movie-info --help
#  Usage
#    $ movie-info movie [year]
#
#  Example
#    $ movie-info 'Oceans Eleven' '1960'
#    => { ... }
```

## Related

Part of a small family of media-data utilities:

- [album-art](https://github.com/lacymorrow/album-art) — Fetch album and artist cover art.
- [movie-art](https://github.com/lacymorrow/movie-art) — Get the poster art for a movie.
- [movie-trailer](https://github.com/lacymorrow/movie-trailer) — Find the trailer for a movie.

## Acknowledgments

- [TMDB](https://www.themoviedb.org) — movie data (subject to the [TMDB Terms of Service](https://www.themoviedb.org/documentation/api/terms-of-use)).

## License

[MIT](./LICENSE) © [Lacy Morrow](https://lacymorrow.com)

<div align="center">
  <sub>If movie-info saved you time, consider <a href="https://github.com/sponsors/lacymorrow">sponsoring on GitHub</a>, <a href="https://patreon.com/lacymorrow">supporting on Patreon</a>, or <a href="https://buymeacoffee.com/lm">buying a coffee</a>.</sub>
</div>
