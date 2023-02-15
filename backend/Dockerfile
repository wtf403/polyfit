FROM golang:1.20-alpine
ENV APP_NAME="polyfit"
ENV APP_DIR="/opt/polyfit"

COPY . $APP_DIR

WORKDIR $APP_DIR
ADD . $APP_DIR
RUN go mod download
RUN go build -o $APP_NAME cmd/main/app.go

# install psql
RUN apk update
RUN apk add postgresql-client

# make wait-for-postgres.sh executable
RUN chmod +x wait-for-postgres.sh

VOLUME ./logs/all.log /opt/polyfit/logs/all.log 

EXPOSE 8087

CMD ["./polyfit"]
