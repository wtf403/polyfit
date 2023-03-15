CREATE TABLE workout
(
  	"id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  	"title" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"type" INT,
	"calories" INT NOT NULL,
	"media" VARCHAR(255),
	"gender" INT
);
