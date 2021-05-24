# lolcommit

A command line tool to generate an amusing commit message.
Find the lolcommit package on [npmjs.com](https://www.npmjs.com/package/lolcommit)
Inspired by [whatthecommit](http://whatthecommit.com/)

## How to install

`npm install -g lolcommit`

## How to run

`lolcommit`

```sh
> Not one conflict, today was a good day.
```

`lolcommit prefix`

```sh
> lolcommit: Who Let the Bugs Out??
```

`lolcommit commit`

```sh
> git commit -m "Ok, 5am, it works.  For real."
```

`lolcommit prefix commit`

```sh
> git commit -m "lolcommit: Version control is awful"
```

## Tests

Tests are written using the [Jest](https://jestjs.io/docs/getting-started) framework.
`npm run test`

## CI

This project uses Travis for CI, to build and run tests on Pull Requests.
