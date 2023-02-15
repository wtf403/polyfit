#!/bin/sh

# set -e
# until psql postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE} -c '\q'; do
#   >&2 echo "Postgres is unavailable - sleeping"
#   sleep 1
# done

# should start postgresql :)
sleep 10

>&2 echo "Postgres is up - executing command"
exec "$@"
