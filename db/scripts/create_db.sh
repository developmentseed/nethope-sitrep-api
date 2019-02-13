#!/bin/sh
DATABASE=${1:-sitrep_test}
psql -c "create database $DATABASE" -U postgres -p 5432 -h localhost
