#!/bin/sh

set -e

until psql postgresql://${DB_USERNAME}:${DB_PASSWORD}@postgresql/${DB_DATABASE} -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec "$@"
