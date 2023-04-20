if [ "${APP_ENV}" != "prod" ]; then \
    psql postgres://${DB_USERNAME}:${DB_PASSWORD}@postgresql/${DB_DATABASE}?sslmode=disable -f fake.sql 2>&1 1>/dev/null; \
fi

echo "finshed with $?"
