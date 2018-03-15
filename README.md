# Workspace experiments

Workspace experiments built with Yarn, Lerna, CRA.

## Installation

Clone the repository and then run the following command:

```
yarn bootstrap
```

## Development

You can directly work on the packages by running the command:

```
yarn watch
```

Then you can go in any examples and run:

```
yarn start
```

Every time you will update a file in `packages` the server will reload.

## Release

The following command will run the build for the packages and let you choose the next version of the lib:

```
yarn release
```

> It's an experiments so no packages or git tag are created
