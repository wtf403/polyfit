CREATE TABLE exercise
(
	"id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"title" VARCHAR(255) NOT NULL,
	"hardness" FLOAT NOT NULL,
	"amount" INT NOT NULL,
	"media" VARCHAR(255),
	"show_timer" BOOLEAN NOT NULL,
	"calories" INT NOT NULL,
	"equipment" INT,
	"gender" INT
);
