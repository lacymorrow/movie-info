# Security Policy

## Reporting a vulnerability

`movie-info` is a small library and its attack surface is limited (it makes HTTPS requests to TMDB on your behalf). Still — if you've found something, please report it privately:

➔ https://github.com/lacymorrow/movie-info/security/advisories/new

Or email **lacy@lacymorrow.com** with `[movie-info security]` in the subject.

Expect an acknowledgement within 72 hours.

## Supported versions

Only the latest published version on npm receives security updates.

## Scope

In scope:
- The published `movie-info` npm package
- Network handling, response parsing, callback contract

Out of scope:
- Vulnerabilities in TMDB's API (please report to TMDB)
- Issues in transitive dependencies (report upstream)
