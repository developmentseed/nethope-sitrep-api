#!/bin/sh
env=${1:-local}
node_modules/.bin/knex migrate:latest --env $env --knexfile db/knexfile.js
