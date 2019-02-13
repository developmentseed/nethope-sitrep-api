# Nethope Sitrep API

An API and database for sharing and disseminating situation reports based off of Jupyter Notebooks

## Installation

```sh
yarn install
```

## API Usage

To start the API locally, you'll need [PostgREST](https://github.com/PostgREST/postgrest/releases/latest) installed. Then run:

```sh
yarn start
```

Instructions for interacting with the API can be found [here](http://postgrest.org/en/v5.2/api.html)

## Database Development

Local database management can be performed with the following commands: `yarn create-db`, `yarn setup-db`, and `yarn drop-db`. To prepopulate a database with example reports through a running API, use `ENDPOINT=[http://apihost:port] yarn seed`.
