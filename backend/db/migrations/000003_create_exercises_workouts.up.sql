CREATE TABLE workout_exercise
(
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workout_id  UUID NOT NULL,
    exercise_id UUID NOT NULL,

    CONSTRAINT workout_fk FOREIGN KEY (workout_id) REFERENCES workout (id),
    CONSTRAINT exercise_fk FOREIGN KEY (exercise_id) REFERENCES exercise (id),
    CONSTRAINT workout_exercise_unique UNIQUE (workout_id, exercise_id)
);
