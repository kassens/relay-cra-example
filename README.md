This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is an example how Relay since 1.7.0-rc.1 and Create React App with `react-scripts` since 2.0.0 can be used to build a Relay powered app without ejecting.

It uses an example Pokemon GraphQL server from https://graphql-pokemon.now.sh/ as the endpoint.

## Available scripts

- `yarn install`: install dependencies
- `yarn start`: start the webserver
- `yarn fetch-schema`: download and write the schema to `scripts/schema.graphql` to be used for the compiler
- `yarn run compile-graphql`: compile GraphQL artifacts after you made changes
