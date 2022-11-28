FROM golang:1.19-alpine3.16

RUN mkdir -p /app/polyfit

COPY . /app/polyfit

WORKDIR /app/polyfit

RUN go mod download
# RUN go install github.com/swaggo/swag/cmd/swag@latest

# RUN swag init

RUN go build -o polyfit cmd/main/app.go

EXPOSE 8080

CMD ["./polyfit"]
