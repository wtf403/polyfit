package main

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"time"

	"github.com/go-chi/chi"
	"github.com/polyfit-live/polyfit/backend/internal/config"
	"github.com/polyfit-live/polyfit/backend/internal/exercise"
	exerciseDB "github.com/polyfit-live/polyfit/backend/internal/exercise/db"
	"github.com/polyfit-live/polyfit/backend/internal/workout"
	workoutDB "github.com/polyfit-live/polyfit/backend/internal/workout/db"
	"github.com/polyfit-live/polyfit/backend/pkg/client/postgresql"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
	httpSwagger "github.com/swaggo/http-swagger"
)

//	@title			Polyfit API
//	@description	Polyfit API
//	@version		1.0.0

//	@host		localhost:8087
//	@BasePath	/api

func main() {
	logger := logging.GetLogger()
	logger.Info("create router")

	router := chi.NewRouter()

	cfg := config.GetConfig()

	postgreSQLClient, err := postgresql.NewClient(context.TODO(), 3, cfg.Storage)
	if err != nil {
		logger.Fatalf("%v", err)
	}

	exerciseRepository := exerciseDB.NewRepository(postgreSQLClient, logger)
	workoutRepository := workoutDB.NewRepository(postgreSQLClient, logger)

	logger.Info("register workouts handler")
	workoutHandler := workout.NewHandler(workoutRepository, logger)
	workoutHandler.Register(router)

	logger.Info("register exercise handler")
	exerciseHandler := exercise.NewHandler(exerciseRepository, logger)
	exerciseHandler.Register(router)

	router.Get("/api/docs/*", httpSwagger.Handler())

	start(router, *cfg)
}

func start(router chi.Router, cfg config.Config) {
	logger := logging.GetLogger()
	logger.Info("start application")

	var listener net.Listener
	var listenErr error

	if cfg.Listen.Type == "sock" {
		logger.Info("detect app path")
		appDir, err := filepath.Abs(filepath.Dir(os.Args[0]))
		if err != nil {
			logger.Fatal(err)
		}
		logger.Info("create socket")
		socketPath := path.Join(appDir, "app.sock")

		logger.Info("listen unix socket")
		listener, listenErr = net.Listen("unix", socketPath)
		logger.Infof("server is listening unix socket: %s", socketPath)
	} else {
		logger.Info("listen tcp")
		listener, listenErr = net.Listen("tcp", fmt.Sprintf("%s:%s", cfg.Listen.BindIP, cfg.Listen.Port))
		logger.Infof("server is listening port %s:%s", cfg.Listen.BindIP, cfg.Listen.Port)
	}

	if listenErr != nil {
		logger.Fatal(listenErr)
	}

	server := &http.Server{
		Handler:      router,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	logger.Fatal(server.Serve(listener))
}
