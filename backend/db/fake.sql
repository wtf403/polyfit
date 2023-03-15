DROP TABLE IF EXISTS exercise CASCADE;
DROP TABLE IF EXISTS workout CASCADE;
DROP TABLE IF EXISTS workout_exercise CASCADE;

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


CREATE TABLE workout_exercise
(
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workout_id  UUID NOT NULL,
    exercise_id UUID NOT NULL,

    CONSTRAINT workout_fk FOREIGN KEY (workout_id) REFERENCES workout (id),
    CONSTRAINT exercise_fk FOREIGN KEY (exercise_id) REFERENCES exercise (id),
    CONSTRAINT workout_exercise_unique UNIQUE (workout_id, exercise_id)
);

INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES ('11111111-1111-1111-1111-111111111111', 'Тяга в наклоне быстро', 1.0, 10, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', false, 123);
INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES ('22222222-2222-2222-2222-222222222222', 'Шаг в высокой планке', 1.0, 10, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', true, 123);
INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES ('33333333-3333-3333-3333-333333333333', 'Жим узким хватом', 1.0, 10, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', true, 123);
INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES ('00000000-0000-0000-0000-000000000000', 'Example title', 0.0, 0, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', false, 777);

INSERT INTO workout (id, title, description, calories, media)
VALUES ('44444444-4444-4444-4444-444444444444', 'Тренируем нашу выносливость', 'Описание', 999, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
INSERT INTO workout (id, title, description, calories, media)
VALUES ('55555555-5555-5555-5555-555555555555', 'Безграничные возможности', 'Описание', 999, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
INSERT INTO workout (id, title, description, calories, media)
VALUES ('66666666-6666-6666-6666-666666666666', 'Улучшаем свои характеристики', 'Описание', 999, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
INSERT INTO workout (id, title, description, calories, media)
VALUES ('00000000-0000-0000-0000-000000000000', 'Test', 'Описание', 0, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');


INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES ('44444444-4444-4444-4444-444444444444', '22222222-2222-2222-2222-222222222222');
INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES ('44444444-4444-4444-4444-444444444444', '11111111-1111-1111-1111-111111111111');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES ('55555555-5555-5555-5555-555555555555', '11111111-1111-1111-1111-111111111111');
INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES ('55555555-5555-5555-5555-555555555555', '33333333-3333-3333-3333-333333333333');
INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES ('55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222');
